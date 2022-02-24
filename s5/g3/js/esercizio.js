var tasti = document.querySelectorAll('button')

 function cambiaColore() {
    var colore = this.getAttribute('data-colore')
    document.querySelector('p').style.color = colore
    
}

tasti.forEach(function(bottone){

    bottone.addEventListener('click', cambiaColore) 

})



