//"use strict";

/*try{
    windowalert('Non ci sono errori!'); //scritto male window.alert
}catch(err){
    document.getElementById('prova').innerHTML = err.message;
};*/


function validazione(){

    const messaggio = document.getElementById('testo');
    messaggio.innerHTML = "";
    let numero = document.getElementById('dato').value;

    try {
        if (numero == "") throw 'niente da verificare';
        if (isNaN(numero)) throw 'questo non è un numero';

        numero = Number(numero);
        if (numero <= 35) throw 'troppo basso';
        if (numero >= 50) throw 'troppo alto';
    } catch (errore) {
        messaggio.innerHTML = 'Verifica del tuo input: ' + errore;
    }
};


//no strict mode

let stringa = 'variabile senza keyword';
alert(stringa);

function calcolo(){
    "use strict"; // number non definita, devo mettere un let o var davanti a number

    let number = 5 * 4;
    return number;
}
console.log(calcolo());

const fiori = {
    tipo: 'rosa',
    colore: 'rosso'
}

console.log(fiori);
console.info(fiori);
console.warn(fiori);
console.error(fiori);