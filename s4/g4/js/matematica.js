//operazioni

let somma = 3 + 7 + 8;
console.log(somma);

let sottrazione = 10 - 7;
console.log(sottrazione);

let sottrazione1 = 7 - 10;
console.log(sottrazione1);

let moltiplicazione = 10 * 7;
console.log(moltiplicazione);

let divisione = 10 / 7;
console.log(divisione);

let modulo = 10 % 3; //il 3 entra 3 volte nel 10 ed avanza 1
console.log(modulo);

let modulo1 = 12 % 4; //non c'è resto perchè il 4 entra esattamente 3 volte nel 12
console.log(modulo1);

let potenza = 2 ** 2;
console.log(potenza);

//numero++ numero --
let numero = 6;

numero++; //6 + 1
console.log(numero);

numero--; //6 - 1
console.log(numero);

//espressioni

let espressione = 3 - 1 * 5 + 10;
console.log(espressione);

let espressione1 = 3 - 1 * (5 + 10);
console.log(espressione1);

//round

let numero2 = 6.4;
console.log(Math.round(numero2)); //approssima all'intero più vicino

//ceil

console.log(Math.ceil(numero2)); //approssima all'intero superiore

//floor

console.log(Math.floor(numero2)); //approssima all'intero inferiore

//pow

console.log(Math.pow(3, 4)); //potenza di 3 alla 4
console.log(Math.pow(-3, 5));

//sqrt

console.log(Math.sqrt(16)); //radice quadrata

//abs

console.log(Math.abs(-8.9)); //far diventare positivo un numero negativo

//sign

console.log(Math.sign(-10)); //indicazione di un numero
console.log(Math.sign(0));
console.log(Math.sign(10));
