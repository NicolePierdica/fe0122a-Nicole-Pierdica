
let mieImg = ['bicycle', 'bicycle', 'leaf', 'leaf', 'cube', 'cube', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb', 'diamond', 'diamond'],

    //selettori utili
    $container = $('.container'),
    $scorePanel = $('.score-panel'),
    $rating = $('.fa-star'),
    $moves = $('.moves'),
    $timer = $('.timer'),
    $restart = $('.restart'),
    $memory = $('.memory'),

    // Variabili
    nowTime,
    allOpen = [],
    match = 0,
    second = 0,
    moves = 0,
    wait = 420,
    totalCard = mieImg.length / 2,

    // Punteggio
    stars3 = 14,
    stars2 = 16,
    star1 = 20;

// Funzione di shuffle
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Inzia il gioco
function init() {

    // mischio le carte
    let allCards = shuffle(mieImg);
    $memory.empty();

    // Imposto come inizia il gioco 
    match = 0;
    moves = 0;
    $moves.text('0');

    // Creo le 16 carte tramite un ciclo for
    // La classe fa fa- + il nome di ogni oggetto presente nell'array chiamato mieImg
    for (let i = 0; i < allCards.length; i++) {
        $memory.append($('<li class="card"><i class="fa fa-' + allCards[i] + '"></i></li>'))
    }
    addCardListener();

    
    resetTimer(nowTime);
    second = 0;
    $timer.text(`${second}`)
    initTime();
    
}


// A seconda di quante mosse ho fatto assegno da 1 a 3 stelle
function rating(moves) {
    let rating = 3;
    if (moves > stars3 && moves < stars2) {
        $rating.eq(3).removeClass('fa-star').addClass('fa-star-o');
    } else if (moves > stars2 && moves < star1) {
        $rating.eq(2).removeClass('fa-star').addClass('fa-star-o');
    } else if (moves > star1) {
        $rating.eq(1).removeClass('fa-star').addClass('fa-star-o');
        rating = 1;
    }
    return { score: rating };
}

// Aggiungo l'alert di bootstrap modal
function gameOver(moves, score) {
    $('#winnerText').text(`In ${second} secondi, hai fatto un totale di ${moves} mosse con un punteggio di ${score}. Grande!`);
    $('#winnerModal').modal('toggle');
}

// Reset gioco
$restart.bind('click', function (confirmed) {
    if (confirmed) {
        $rating.removeClass('fa-star-o').addClass('fa-star');
        init();
    }
});

// Funzione per fare in modo che se due carte sono uguali rimangano "aperte"
// Se le carte non sono uguali si rigirano
let addCardListener = function () {

    // Clicco sulla carta e si gira
    $memory.find('.card').bind('click', function () {
        let $this = $(this);

        if ($this.hasClass('show') || $this.hasClass('match')) { return true; }

        let card = $this.context.innerHTML;
        $this.addClass('open show');
        allOpen.push(card);

        // Se le carte sono uguali le confronto
        if (allOpen.length > 1) {
            if (card === allOpen[0]) {
                $memory.find('.open').addClass('match');
                setTimeout(function () {
                    $memory.find('open').removeClass('open show');
                }, wait);
                match++;

                // Se le carte non sono uguali, c'è un tempo di attesa dopodichè si rigirano
            } else {
                $memory.find('.open').addClass('notmatch');
                setTimeout(function () {
                    $memory.find('.open').removeClass('open show');
                }, wait / 1.5);
            }

            
            allOpen = [];

            // Aggiunge il numero di mosse ogni volta che clicco sulle carte
            moves++;

            // Determino il punteggio per le stelle
            rating(moves);

            
            $moves.html(moves);
        }

        // Fine del gioco
        if (totalCard === match) {
            rating(moves);
            let score = rating(moves).score;
            setTimeout(function () {
                gameOver(moves, score);
            }, 500);
        }
    });
}

// Start timer
function initTime() {
    nowTime = setInterval(function () {
        $timer.text(`${second}`)
        second = second + 1
    }, 1000);
}

// Reset timer
function resetTimer(timer) {
    if (timer) {
        clearInterval(timer);
    }
}

init();