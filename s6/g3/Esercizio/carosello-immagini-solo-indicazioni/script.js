// quando il documento è pronto...(forma breve)...

    // creo una variabile "carosello" e creo così un oggetto jQuery che contenga gli elementi ul (il selettore è #img-l).
    

    // gestisco il click event handler per il pulsante sinistro.
    
        // creo una variabile "lProp" che contiene il valore della proprietà "left" (usa parseInt per convertire in numero intero)
        // qui contengo l'ul che serve per muovere l'elemento a destra e sinistra.
        

        // determino il nuovo valore della proprietà left e prima creo una nuova variabile "newLProp" che lo contiene. 
        // Utilizzo l'if.
        

        // uso il metodo animate per cambiare il valore della proprietà "left"
    

    // gestisco il click event handler per il pulsante destro
    
        // uso il codice per la gestione del pulsante sinistro, l'unica variazione è la determinazione del nuovo valore
        // della proprietà "left".

        /*$(() => {
        $("#l-btn").click(function(){
            $("#img-l").animate({
                left: "-300px"
            })
        })
        $("#r-btn").click(function(){
            $("#img-l").animate
        })
        })*/

var sliderWidth = 300;
var slider = $('#img-l');
var sliderCount = $('div', slider).length;


$(() => {
$('#l-btn').click(function(){ 
    $('#img-l').animate({left: '+='+sliderWidth}, 500); 
});

$('#r-btn').click(function(){
    $('#img-l').animate({left: '-='+sliderWidth}, 500);
});

});
        

        // determino il nuovo valore della proprietà "left"
        

        // uso il metodo animate per cambiare il valore della proprietà left
     