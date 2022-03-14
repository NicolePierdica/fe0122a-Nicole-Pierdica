class datiUtente {
    constructor(username,email,password){
        this.id = (() =>{
          let newId = localStorage.getItem('id') == null ? 1 : Number(localStorage.getItem('id'))+1
          localStorage.setItem('id',newId)
          return newId  //serve per valorizzare l'id altrimenti non lo trova
        })()
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

document.querySelector('#registra').addEventListener('click',function(){
    let username = document.querySelector('#form3Example1c').value
    let email = document.querySelector('#form3Example3c').value
    let password = document.querySelector('#form3Example4c').value
    let password2 = document.querySelector('#form3Example4cd').value
    let campi = document.querySelectorAll('input') // crea classe dopo
    var control = true;

    campi.forEach( function (campo){
        if(campo == " "){
            control = false
            campo.style.border = "1px solid red"
        }else{
            console.log(campo.id + "  valido" )
            campo.style.border = ""
        }
     })
   

    if (password2 != password){
        alert('Le password devono combaciare')
        control = false;
    }else{
        console.log('Password combacia')
    }

    if(control){
       // alert('form inviato')
        let utentiSalvati = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))
        let dati = new datiUtente(username,email,password)
        utentiSalvati.push(dati)
        console.log(utentiSalvati)
        localStorage.setItem('utenti', JSON.stringify(utentiSalvati))
    
    }else{
        alert('il form non Ã¨ compilato correttamente')
    }

});