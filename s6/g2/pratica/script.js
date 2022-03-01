// Quando il documento è pronto...

    // collega i gestori evento per il click per tutti i tag h2.
    /* $(document).ready(function(){
        $("h2").click(function(){
            let tendina = $("h2" + )
            $("div").addClass(".meno");
            $("div").toggleClass(".meno")
        });
    })*/
    
        // crea una variabile ed immagazzina al suo interno il tag h2 che inizializza l'evento (usa .currentTarget).
        
        
        // attiva la classe .meno dei CSS sul tag h2.
        

        // mostra o nascondi il div, utilizza un if-else.
       
        

        // utilizza il prepreventDefault() per prevenire che il gestore eventi di default sia eseguito.
    

    // imposta il focus sul primo tag ancor dell'h2

    function dynamicFaq(){
       
        $("h2").click(function(){
            $(this).show("div");
            $(this).next().slideToggle("div");
            $(this).toggleClass("meno");
        
            });   
              
    };

    $(document).ready(function(){
        dynamicFaq();
    });
     
