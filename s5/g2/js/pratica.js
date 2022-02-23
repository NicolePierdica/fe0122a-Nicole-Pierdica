// TIMER sembra un ciclo ma non è
//COME FUNZIONANO LE CALL BACK

//opzione 1

setInterval(log,1000)

function log() {
    console.log('ok')
}

//opzione 2

setInterval(function(){
    console.log('ok')
},1000)

//opzione 3 più interessante

setInterval(function(){ //il setInterval viene sempre elaborato per ultimo
    log2('ciao')
},1000)

function log2(testo){
    console.log(testo)
}