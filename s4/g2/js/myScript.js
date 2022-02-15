var nome = "Nicole"; //differenza tra var let e const

{
    let nome1 = "Alice"
    console.log(nome1);

    let cognome = "Pierdica";
    console.log(cognome);
}

console.log(nome);
//console.log(cognome); //da errore undefined

var animale = "cane";
console.log(animale);

{ 
    const animale = "gatto";
    console.log(animale);

    const animale1 = "tartaruga";
    console.log(animale1);

}

//console.log(animale1); //da errore undefined

var numero = 10;
var numero1 = 7;
var somma = (numero + numero1);
console.log(somma); //somma

var numero = 80;
var numero1 = 20;
var sottrazione = (numero - numero1);
console.log(sottrazione); //sottrazione

var patente = true;
console.log(patente); //dato booleano

var finale = nome + " " + animale + " " + patente; 
console.log(finale); //esempio di concatenazione