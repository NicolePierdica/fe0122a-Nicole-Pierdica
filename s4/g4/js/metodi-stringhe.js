//indexof e lastindexof

let saluto = "Ciao a tutti gli studenti, a quelli esterni e a quelli interni. CIAO!";

let ricerca = saluto.indexOf('a');
console.log(ricerca);

ricerca = saluto.indexOf('a', 4);
console.log(ricerca);

ricerca = saluto.lastIndexOf('quelli');
console.log(ricerca);

//search

ricerca = saluto.search('studenti');
console.log(ricerca);

//lenght

ricerca = saluto.search('Ciao');
console.log(ricerca);
console.log(saluto.lenght); //undefined

let parola = "word";
console.log(parola.lenght); //undefined

//slice

console.log(saluto.slice(7, 12));
console.log(saluto.slice(8, 22));
console.log(saluto.slice(10));

//substring

console.log(saluto.substring(7, 12)); //uguale a slice

//substr

console.log(saluto.substr(7, 12)); //prende la porzione dal carattere 7 al 12

//replace

var sostituisci = saluto.replace('studenti', 'discendenti');
console.log(sostituisci);

var sostituisci = saluto.replaceAll('quelli', 'quello');
console.log(sostituisci);

//toLowerCase toUpperCase

console.log(saluto.toLowerCase());
console.log(saluto.toUpperCase());

//concat

var concatenata = saluto.concat('Frase aggiunta');
console.log(concatenata);

//spazi vuoti

var spaziVuoti = "     Ciao, sto studiando JS     "; //elimina solo spazio ad inizio o fine della stringa
var tagliata = spaziVuoti.trim();
console.log(tagliata);

//charAt
var posizione = spaziVuoti.trim().charAt(2);
console.log(posizione);

//split

var splittata = "Hello";
var splittata1 = splittata.split('');
console.log(splittata1);










