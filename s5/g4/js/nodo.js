//document.getElementById('test').innerHTML = document.body.innerHTML;
//document.getElementById('test').innerHTML = document.documentElement.innerHTML;

//document.getElementById('par1').innerHTML = document.getElementById('esempio').innerHTML;
//document.getElementById('par1').innerHTML = document.getElementById('esempio').firstChild.nodeValue;
//document.getElementById('par1').innerHTML = document.getElementById('esempio').childNodes[0].nodeValue;


function creaNodo(){
    let testo = document.createTextNode('Sono un nuovo nodo');
    document.body.appendChild(testo);
}

function rimuoviElemento(){
    let miaLista = document.getElementById('lista');
    miaLista.removeChild(lista.childNodes[1]);
}

function creaElemento(){
    let paragrafo = document.createElement('P');
    paragrafo.innerHTML = 'Veramente JS è una cacca';
    document.body.appendChild(paragrafo);
    paragrafo.style.color = 'f00';
}

function remove(){
    let elementoRimosso = document.getElementById('par1');
    elementoRimosso.remove();
}


li.addEventListener('click', function(){
    li.remove()
}) //dico che al click su li aggiungo la funzione di rimozione