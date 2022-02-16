//funzione range anni

function rangeAnni(){
    var annoAttuale = 2022;
    var annoNascita = 1988;
    function eta(){
        console.log(annoAttuale - annoNascita);

    }
    return eta();
}
rangeAnni();


//funzione freccia

zyber = () => 'Sono un ninja';
console.log(zyber());

//funzione dentro funzione

function doubleFunction(){
    var pireci = 10;
    function voto(){
        console.log(pireci + pireci);
    } 
    return voto();

}
doubleFunction();

//operatori

var num1 = 55;
var num2 = 62;
num1 == num2; //false
console.log(num1 == num2);

num1 === num2; //false
console.log(num1 === num2);

num1 != num2;
console.log(num1 != num2); //true non uguale

num1 !== num2;
console.log(num1 !== num2); //true non identico

var num3 = 55;
var num4 = "55";

num3 === num4;
console.log(num3 === num4); //false

num3 == num4;
console.log(num3 == num4); //true

num1 < num2 && num3 == num4;
document.write(num1 < num2 && num3 == num4); //true

num1 > num2 || num3 == num4;
document.write(num1 > num2 || num3 == num4); //true

var vero = true;
var lett = "ciao";
console.log(vero + " " + lett);


