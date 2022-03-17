fetch('menu.json') 
    .then(function (res) { return res.json(); }) //dalla risposta recupera il json. Res è la prima risposta della fetch che contiene un oggetto che è l'istanza della classe response.Qui il return è sottointeso
    .then(function (data) {
    console.log(data);
    data.forEach(function (item) {
        console.log(item); // pre ogni oggetto del json crea una istanza di pizza
        var pizza = new Pizza(item.nome, item.tipo, item.prezzo, item.disponibile); // l'istanza va messa fuori dalla classe
        console.log(pizza.mostraPrezzo());
    });
});
var Pizza = /** @class */ (function () {
    function Pizza(n, t, p, d) {
        this.nome = n;
        this.tipo = t;
        this.prezzo = p;
        this.disponibile = d;
        console.log(this.mostraPrezzo()); // se aggiungo this.mostraPrezzo() allora verrebbe eseguito in automatico
    }
    Pizza.prototype.mostraPrezzo = function () {
        return "Il prezzo della pizza ".concat(this.nome, " \u00E8 pari a ").concat(this.prezzo, "euro"); //il metodo va richiamato per essere usato
    };
    return Pizza;
}());
var diavola = new Pizza("Diavola", "Romana", 1, true); // aggiungo nuove pizze
var mimosa = new Pizza("Mimosa", "Napoletana", 7, true);
