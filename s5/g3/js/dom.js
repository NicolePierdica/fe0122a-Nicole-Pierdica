document.getElementById('titolo').innerHTML = "JS è terribile";

const div = document.getElementById('contenitore');
const divTag = div.getElementsByTagName('p');

document.getElementById('prova').innerHTML = 'il primo elemento del div è : ' + divTag[0].innerHTML;

const classe = document.getElementsByClassName('selezione');

document.getElementById('prova1').innerHTML = 'il primo elemento della classe "selezione" è: ' + classe[0].innerHTML;

function aggiungiClasse(){
    document.getElementById('custom').className = 'customStyle';
}

//manipolare lo stile

function cambiaStile(){
    document.getElementById('prova2').style.color = '#f00';
}