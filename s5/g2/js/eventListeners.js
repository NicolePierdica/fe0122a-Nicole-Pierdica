
// da oggi usiamo eventListeners

//var tasto = document.querySelector
//('#background-change')

//tasto.addEventListener('click', cambiaSfondo) //funzione di call back

//function cambiaSfondo() {

    //document.querySelector('body').style.backgroundColor = 'red'
//}

//attributo personalizzato metto data-

var tasti = document.querySelectorAll('button')

function cambiaSfondo() {
    var colore = this.getAttribute('data-colore')
    document.querySelector('body').style.backgroundColor = colore
}

tasti.forEach(function(bottone){

    bottone.addEventListener('click', cambiaSfondo)

})

