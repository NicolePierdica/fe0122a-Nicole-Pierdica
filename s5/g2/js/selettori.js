document.getElementById("tasto").innerHTML // 1 solo elemento(oggetto)

var btn = document.getElementsByClassName("btn") // una sorta di array, per selezionare gli elementi, dato che sono tanti, devo usare la sintassi degli array []
console.log(btn)

document.getElementsByTagName('button') // sorta di array


// MEGLIO USARE IL querySelector

document.querySelector('#tasto') // stessa cosa della riga 1 

document.querySelector('button') // il primo con la classe button

document.querySelector('btn') // il primo con la classe btn

document.querySelectorAll('button') // tutti i button ed è reiterabile posso usare forEach

document.querySelectorAll('.btn') // tutti i btn

document.querySelectorAll('.btn, button') // posso mettere tutto                                 // posso usare tutti i selettori di CSS