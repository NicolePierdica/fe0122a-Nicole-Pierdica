function resetCalculator(){
    let risultato = document.getElementById("risultato")
    risultato.value = ''
} 


risultato.value  //mi dice di vedere il value del risultato


function isSymbol(s){
    var simboli = ['.','+','-','/','*']
    if (simboli.includes(s)){
        return true
    }else{
        return false
    }
}

function prendiTasto(tasto){
    let risultato = document.getElementById("risultato")
    let num = tasto.id;
}
if(!isSymbol(num)){ //se non è un simbolo
    risultato.value += num //aggiungi tranquillamente il carattere
}else{
    var ultimoCarattere = risultato.value[risultato.value.lenght - 1]
}