fetch('abbigliamento.json')
    .then(res => res.json()) //dalla risposta recupera il json. Res è la prima risposta della fetch che contiene un oggetto che è l'istanza della classe response.Qui il return è sottointeso
    .then(data => {
        
        data.forEach((item: Vestiario) => {
            
            let vestiario = new Vestiario(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo); // l'istanza va messa fuori dalla classe
            console.log(vestiario);
            
            console.log(vestiario.getAcquistoCapo());
            
  
      
        })
    })

class Vestiario {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {  //viene eseguito in automatico  // non mettiamo la proprietà ma il valore che va nella proprietà


        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }

      
        getSaldoCapo():number {
            return (this.prezzoivainclusa/100)*this.saldo
        }  
                 
        
        getAcquistoCapo():string {
            return `Il prezzo del capo ${this.capo} scontato è di ${this.prezzoivainclusa - this.getSaldoCapo()} €`;
        }
        

         
      
}

let pantaloni = new Vestiario(6, 6112, "primavera", "pantaloni", 1242, 7, "verde", 35, 50, "negozio", 30)
console.log(pantaloni);
console.log(pantaloni.getAcquistoCapo());

let gonna = new Vestiario(7, 6213, "estate", "gonna", 1229, 4, "bordeaux", 22, 34, "magazzino", 40)
console.log(gonna);
console.log(gonna.getAcquistoCapo());

let camicia = new Vestiario(8, 7782, "inverno", "camicia", 1267, 8, "celeste", 40, 55, "online", 50)
console.log(camicia);
console.log(camicia.getAcquistoCapo());


