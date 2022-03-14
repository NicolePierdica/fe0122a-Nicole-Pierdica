document.getElementById("form").addEventListener("submit", function(e){
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    
    if (nome == "") {
        //alert("Attenzione campo richiesto!");
       document.getElementById("nome").value = " * campo richiesto";
       messages.push("* campo richiesto")
       
    } 
    
    
    if (cognome == "") {
        document.getElementById("cognome").value = " * campo richiesto";
        
    } 
    if (email == "") {
        document.getElementById("email").value = "* campo richiesto";
        
    } 
    if (password == "") {
        document.getElementById("password").value = " *campo richiesto";
        
    } 
   
  
   
});


