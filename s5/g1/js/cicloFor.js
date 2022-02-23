// per quante volte deve essere reiterato il nostro ciclo
// ha bisogno di 3 parametri : inizio, condizione e quante volte si ripeterà, fine eseguito dopo blocco di codice tante volte quanto indicato dal parametro 2

let testo = "";

let pet = ['cane', 'gatto', 'criceto', 'coniglio'];

console.log(typeof(pet));

for(let i = 0; i < pet.length; i++) { // i = inizio
    testo += pet[i] + "<br>";
}

document.getElementById('test').innerHTML = testo;

//for in
let leggi = "";
let fiori = ['rosa', 'geranio', 'tulipano', 'margherita'];

for(fiore in fiori){
    leggi += fiori[fiore] + "\n";
}
document.getElementById('test1').innerHTML = leggi;


//for of

var nome = "Nicole";
var text = "";

for(var char of nome){
    text += char + "\n";
}
document.getElementById('test2').innerHTML = text;

