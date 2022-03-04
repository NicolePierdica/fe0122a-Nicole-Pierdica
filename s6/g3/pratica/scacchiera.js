let scacchiera = document.createElement("div");
scacchiera.id = "scacchiera"

document.querySelector("body").prepend(scacchiera);     // inserisce l'oggetto prima del primo figlio dell'elemento selezionato

function creaCasella(testo){
    let div = document.createElement("div");
    div.classList.add("casella")
    div.innerHTML = testo
    document.querySelector("#scacchiera").append(div)
}

for(let x=0; x < 8; x++){
    for(let y=0; y < 8; y++){
   let div = document.createElement("div");
   div.classList.add("casella")
   let modulo = (x + y) % 2                       // il modulo ti restituisce il resto
   if(modulo == 0){
       div.style.backgroundColor = "black"
   }        
   document.querySelector("#scacchiera").append(div) 
   //console.log(`modulo di ${x} e ${y}`)     // backtick per fare interpolazione
    }
}