var weekend = "venerdì";

switch(weekend){      //costrutto che può presentare più casi con diverse istruzioni
    case 'venerdì':          //deve essere una opzione univoca
        console.log('questo è il caso 0');
        break;       //ferma l'analisi del codice e fa vedere solo quella true
    case 'sabato':
        console.log('questo è il caso 1');
        break;
    case 'domenica':
        console.log('questo è il caso 2');
        break;   
    default:          //solitamente messo alla fine della catena
        console.log('questo è il caso di deafult');     
}


var stagione = "";

switch (stagione) {
    case "autunno":
    console.log("è autunno, si mangiano le castagne");
    break;
    case "inverno":
    console.log("è inverno, si va a sciare");
    break;
    case "primavera":
    console.log("fioriscono gli alberi");
    break;
    case "estate":
    console.log("si muore di caldo")
    break;
    default:
    console.log("perchè non hai scelto nessuna stagione?")
    ;
}