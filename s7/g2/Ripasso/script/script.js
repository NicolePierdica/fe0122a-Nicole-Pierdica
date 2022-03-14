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
        if(campo.value == ""){
            control = false
            campo.style.border = "1px solid red"
        }else{
            console.log(campo.id + "  valido" )
            campo.style.border = ""
        }
     })
   

    if (password2 != password){
        Swal.fire({
            title: 'Errore!',
            text: 'le password non combaciano!',
            icon: 'error',
            confirmButtonText: 'riprova'
          })
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
        Swal.fire({
            title: 'COMPLIMENTI! SEI REGISTRATO',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat`
          })
          setTimeout(function(){
            window.location = "login.html";
        
            }, 2000);
    
    }else{
        Swal.fire({
            title: 'Error!',
            text: 'il form non è stato correttamente compilato',
            icon: 'error',
            confirmButtonText: 'Inserisci tutti i campi'
          })
    }

    

});



