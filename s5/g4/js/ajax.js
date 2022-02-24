document.getElementById('getPet').addEventListener('click', showPet);

function showPet(){
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'pet.json');
    ajax.onload = function(){
        if(this.status == 200){
            var pet = JSON.parse(this.responseText);

            var mostra = "";

            mostra += '<ul>' + 
            '<li>ID: ' + pet.id + '</li>' +
            '<li>ID: ' + pet.nome + '</li>' +
            '<li>ID: ' + pet.colore + '</li>' +
            '<li>ID: ' + pet.specie + '</li>'
            + '</ul>';
document.getElementById('pet').innerHTML = mostra;
        } else if (this.status == 400) {
            document.getElementById('pet').innerHTML 
            = 'Risorsa non trovata';
        }
    }
    ajax.send();
}