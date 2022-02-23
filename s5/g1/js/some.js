// mi dice se nell'array c'è qualche valore che corrisponde al criterio che ho datolet serie = [1, 2, 3, 4, 5, 6, 7];

let serie = [1, 2, 3, 4, 5, 6, 7];

let serieSome = serie.some(arrayFilter);

document.getElementById('test').innerHTML = serieSome;

function arrayFilter(valore) {

    return valore >= 2;
} 