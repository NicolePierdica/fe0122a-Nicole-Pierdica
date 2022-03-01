// Quando il documento è pronto...

    //gestisco il click sul pulsante Iscriviti
    //var iscriviti = document.getElementById("iscr-news");

    
        //$(document).ready(function(){
            //$("iscr-news").click(function(){
                //$("nome").text("Richiesto");
            //});
        //}); 
        
        // inizializzo una variabile di controllo a true
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        let eMail = $("email-1").val();
        let eMail1 = $("email-2").val();  // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

        //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 

  

 



    $(document).ready(function(){          //submit quando il form è ready
        $("#iscr-news").click(function(){
            $("form-email").submit();
        });
    });
    
  
    $(document).ready(function(){             //pulisci il form con il bottone apposito
     $("#pulisci-form").click(function(){
         $("form-email").remove("");

     });
 });


    