fetch('menu.json')  //richiamo il json in locale. Occorrono sempre due then, il primo è sempre uguale
.then(res => res.json())   //dalla risposta recupera il json. Res è la prima risposta della fetch che contiene un oggetto che è l'istanza della classe response.Qui il return è sottointeso
.then(data => {     //data è il contenuto della pagina. data è un array
    console.log(data);

    data.forEach((item:Pizza) => {         //json porta solo i valori quindi devo fare le classi
        console.log(item);           // pre ogni oggetto del json crea una istanza di pizza

        let pizza = new Pizza(item.nome,item.tipo,item.prezzo,item.disponibile)    // l'istanza va messa fuori dalla classe
        console.log(pizza.mostraPrezzo());
        
        
    })
})

class Pizza{
    nome: string;
    tipo: string;
    prezzo: number;
    disponibile: boolean;

    constructor(n:string, t:string, p:number, d:boolean) {  //viene eseguito in automatico  // non mettiamo la proprietà ma il valore che va nella proprietà
        this.nome = n;
        this.tipo = t;
        this.prezzo = p;
        this.disponibile = d;
        console.log(this.mostraPrezzo());                       // se aggiungo this.mostraPrezzo() allora verrebbe eseguito in automatico
    }

    mostraPrezzo():string{
        return `Il prezzo della pizza ${this.nome} è pari a ${this.prezzo}euro`;   //il metodo va richiamato per essere usato
    }

    // aggiungiSconto(){}
}

let diavola = new Pizza("Diavola","Romana",1,true);  // aggiungo nuove pizze
let mimosa = new Pizza("Mimosa","Napoletana",7,true);