let serie = [3, 4, 6, 7, 8, 10];

let serieFind = serie.find(arrayFilter); // ti da il primo valore che trova con quel parametro

let serieFindIndex = serie.findIndex(arrayFilter); // ti dice in che posizione si trova il valore
console.log(serieFindIndex);

document.getElementById('test').innerHTML = serieFind;

function arrayFilter(valore) {
    return valore < 6;
}