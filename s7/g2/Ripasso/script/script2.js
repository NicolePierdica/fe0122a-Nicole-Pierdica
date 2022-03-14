//login
document.querySelector("#login1").addEventListener("click", function(){

    var nome1 = document.querySelector("#nome1").value
    var password1 = document.querySelector("#password1").value

    var listaUtenti = JSON.parse(localStorage.getItem("utenti"))


    console.log(nome1)
    console.log(password1)

});

