//parentesi tonde parametro
//col . è un metodo

var blocco = document.querySelector('.blocco');

var t = 0

setInterval(function(){

    console.log('ok')
    blocco.style.top = t+'px'
    blocco.style.right = t+'px'
    if(t <= 900){
        t++
    }else{
        t = 0
    }
},30)

var blocco1 = document.querySelector('.blocco1');

var t1 = 0

setInterval(function(){

    console.log('ok')
    blocco1.style.top = t1+'px'
    blocco1.style.left = t1+'px'
    if(t1 <= 900){
        t1++
    }else{
        t1 = 0
    }
},30)




