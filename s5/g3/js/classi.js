//creo una classe

class Veicoli{
    constructor(colore, marca, modello){
        this.colore = colore;
        this.marca = marca;
        this.modello = modello;
    }

    corre(){
        let consumo = 20;
        return consumo * 10;
    }
}
//sottoclasse della classe Veicoli

class Macchine extends Veicoli {
    constructor(colore, posti){

        super(colore); //proprietà della superclasse

        this.posti = posti; //proprietà della sottoclasse
    }
    static mostraMessaggio(){  // statici vanno letti dalla classe di appartenenza
        return 'Sono una macchina!';
    }
}

document.getElementById('prova').innerHTML = Macchine.mostraMessaggio();

const berlina = new Macchine('rossa', 5);

//document.getElementById('prova').innerHTML = berlina.colore + " " + berlina.posti + " " + berlina.corre();
//istanziamo un oggetto della classe Veicoli

const landRover = new Veicoli('bianca', 'defender', 90);

//document.getElementById('prova').innerHTML = landRover.marca + " " + landRover.corre();