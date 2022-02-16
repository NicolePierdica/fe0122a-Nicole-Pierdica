let animali = ["cane", "gatto", "coniglio", "criceto"];
console.log(animali);

//pop

/*let variabilePop = animali.pop();
console.log(variabilePop);
console.log(animali);

//push

let variabilePush = animali.push('leone');
console.log(variabilePush);*/


//shift

//let varShift = animali.shift();
//console.log(varShift);
//console.log(animali);

//unshift

//let varUnshift = animali.unshift('tigre');
//console.log(animali);
//console.log(varUnshift);

//delete

//let varDelete = delete animali[2];
//console.log(animali);

//splice

//let varSplice = animali.splice(1, 1, "pantera");
//console.log(animali);
//console.log(varSplice);

//let varSplice = animali.splice(2, 2, "pantera", "leone");
//console.log(animali);
//console.log(varSplice);

//concat

let pet1 = ['gatto','cane'];
let pet2 = ['criceto','coniglio'];
let pet3 = ['leone','tigre'];
var concat1 = pet1.concat(pet2, pet3);
console.log(concat1);

//slice

let varSlice = concat1.slice(1,3);
console.log("Array: " + concat1);
console.log("metodo slice: " + varSlice);