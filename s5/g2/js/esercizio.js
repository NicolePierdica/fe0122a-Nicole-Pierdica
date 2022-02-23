

var a = 100;
var b = 75;
var c = 50;
var d = 25;
var e = 0;

var budget = calcolaPerc(a, c, d, e,);
document.querySelector(budget + '%');

function calcolaPerc(tot,num) {
    return ((num/tot) * 100).toFixed(0);
  }


mioBudget.addEventListener('click', calcolaPerc);

