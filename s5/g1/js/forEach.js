//let serie = [2,4,6,3,9,5];
//console.log(serie);

//serie.forEach(aggiungi);  //lavora su tutti gli elementi del ciclo

//function aggiungi(valore){

    //return valore + 2;
//}

let testo = "";
let serie = [2, 4, 6, 3, 9, 5];
console.log(serie);

let serie1 = serie.map(aggiungi); //creazione di un array nuovo e posso manipolarlo
console.log(serie1);

serie.forEach(aggiungi);

//document.getElementById('test').innerHTML = testo;
document.getElementById('test').innerHTML = serie1;

function aggiungi(valore) {

    return valore + 2;
    //testo += valore + 2 + "<br>";
}