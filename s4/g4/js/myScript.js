var animali = ["gatto", "cane", "coniglio"];

var animali = [
    "gatto",
    "cane",
    "coniglio"
];
console.log("Animali: " + animali);
console.log("Animali: " + typeof animali);

var matricole = [
    12,
    345,
    45
];
console.log("Matricole: " + matricole);
console.log("Matricole: " + typeof matricole);

var animali1 = new Array(
    "gatto",
    "cane",
    "coniglio",
    "leone"
);
console.log(animali1);
console.log("Animali-1: " + animali1);
console.log("Animali-1: " + typeof animali1);


var studente = {
    matricola: 234,
    nome: "Nicole",
    corso: "Javascript"
}
console.log("Studente: " + studente);
console.log("Studente: " + typeof studente);

//document.getElementById('prova-lista').innerHTML = animali[2];

console.log(animali1[0]);

//document.getElementById('prova-lista').innerHTML = studente.corso;

document.getElementById('prova-lista').innerHTML = animali.toString(); //lo visualizza come stringa

console.log(animali.sort()); //mette in ordine alfabetico