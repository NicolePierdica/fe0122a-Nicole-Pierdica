let serie = [1, 3, 6, 8, 12];

let serieSomma = serie.reduce(arrayReduce);

document.getElementById('test').innerHTML = serieSomma;


function arrayReduce(totale, valore) {

    return totale + valore;
}
