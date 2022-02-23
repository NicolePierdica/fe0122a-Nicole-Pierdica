// va a vedere se tutti i valori del mio array corrispondono a quell'opzione che ho dato

let serie = [1, 2, 3, 4, 5, 6, 7];

let serieEvery = serie.every(arrayFilter);

document.getElementById('test').innerHTML = serieEvery;

function arrayFilter(valore) {

    return valore >= 2;
} 