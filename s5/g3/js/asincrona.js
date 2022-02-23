function funzione1(){
    alert('Sono la funzione 1');
}

function funzione2(){
    alert('Sono la funzione 2');
}

funzione2();
funzione1();

function mostra(valore){
    document.getElementById('prova').innerHTML = valore;
}

function faiCalcolo(num1, num2, miaCallback) {

    let calcolo = num1 + num2; //esecuzione istruzioni

    //mostra(calcolo); //funzione invocata all'interno di un'altra
    miaCallback(calcolo); //callback
}

faiCalcolo(5, 8, mostra);

/*setTimeout(function(){

    intervallo('Ciao Mondo');

}, 4000); // 4 secondi

function intervallo(secondi){

    document.getElementById('test').innerHTML = secondi;

}*/

/*const attesa = new Promise(function(successo, errore){
    setTimeout(function(){
        successo('Ciao belli e brutti');
    }, 2000);
});

attesa.then(function(secondi){

    document.getElementById('test').innerHTML = secondi;
});*/

//funzione asincrona

function mostraFunzione(testo){
    document.getElementById('prova').innerHTML = testo;
}

async function saluto(){
    return 'Questa è la mia prima funzione asincrona';
}

saluto().then(function(chiave){ //then mi richiama le funzioni che avevo gestito
    
    mostraFunzione(chiave);
},

function(errore){

    mostraFunzione(errore);
}
);

async function mostraMessaggio(){
    let attesa = new Promise(function(successo, errore){
        setTimeout(function(){
            successo('Ciao al mondo intero');
        }, 3000);
    });
}

document.getElementById('test').innerHTML = await attesa;

mostraMessaggio();