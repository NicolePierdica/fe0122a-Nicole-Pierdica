const utente = {
    nome: "Nicole",
    cognome: "Pierdica",
    anni: 34,

    datiUtente: function(){
        return this.nome + " " + this.anni;
    }
}

//document.getElementById('testo').innerHTML = utente.nome + "\n" + utente.cognome;
document.getElementById('testo').innerHTML = 'Dati dell\'utente: ' + utente.datiUtente();

function Animali(specie, razza, colore){
    this.specie = specie;
    this.razza = razza;
    this.colore = colore;
}

//implementazioni del costruttore

Animali.prototype.altezza = 72;
Animali.prototype.datiAnimali = function(){
    return this.colore + "\n" + this.altezza;
}

const gatto = new Animali("mammiferi", "certosino", "grigio");
const cane = new Animali("mammiferi", "pastore tedesco", "marrone")

//aggiungo una proprietà all'oggetto
gatto.genere = "femmina";

document.getElementById('testo').innerHTML = gatto.datiAnimali() + " " + gatto.altezza + " " + gatto.colore + " " + cane.razza + " " + gatto.genere;

