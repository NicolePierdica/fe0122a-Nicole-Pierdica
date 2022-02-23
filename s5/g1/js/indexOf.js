// orientato alle stringhe - do una chiave di ricerca che vede se c'è l'elemento e in che posizione è

let serie = [1, 2, 3, 4, 5, 6, 7];

let serieindexOf = serie.indexOf(arrayFilter); //nelle parentesi possiamo anche mettere un parametro e ti darà la posizione di quello

document.getElementById('test').innerHTML = serieindexOf; //risultato negativo della ricerca significa che non c'è

function arrayFilter(valore) {

    return valore >= 2;
} 