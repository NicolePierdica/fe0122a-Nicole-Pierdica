let serie = [3, 4, 6, 7, 8, 10];

let serie2 = serie.filter(arrayFilter);


document.getElementById('test').innerHTML = serie2;

function arrayFilter(valore) {
    return valore < 6;
}