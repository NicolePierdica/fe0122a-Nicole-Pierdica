fetch('abbigliamento.json')
    .then(function (res) { return res.json(); }) //dalla risposta recupera il json. Res è la prima risposta della fetch che contiene un oggetto che è l'istanza della classe response.Qui il return è sottointeso
    .then(function (data) {
    data.forEach(function (item) {
        var vestiario = new Vestiario(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo); // l'istanza va messa fuori dalla classe
        console.log(vestiario);
        console.log(vestiario.getAcquistoCapo());
    });
});
var Vestiario = /** @class */ (function () {
    function Vestiario(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    Vestiario.prototype.getSaldoCapo = function () {
        return (this.prezzoivainclusa / 100) * this.saldo;
    };
    Vestiario.prototype.getAcquistoCapo = function () {
        return "Il prezzo del capo ".concat(this.capo, " scontato \u00E8 di ").concat(this.prezzoivainclusa - this.getSaldoCapo(), " \u20AC");
    };
    return Vestiario;
}());
var pantaloni = new Vestiario(6, 6112, "primavera", "pantaloni", 1242, 7, "verde", 35, 50, "negozio", 30);
console.log(pantaloni);
console.log(pantaloni.getAcquistoCapo());
var gonna = new Vestiario(7, 6213, "estate", "gonna", 1229, 4, "bordeaux", 22, 34, "magazzino", 40);
console.log(gonna);
console.log(gonna.getAcquistoCapo());
var camicia = new Vestiario(8, 7782, "inverno", "camicia", 1267, 8, "celeste", 40, 55, "online", 50);
console.log(camicia);
console.log(camicia.getAcquistoCapo());
