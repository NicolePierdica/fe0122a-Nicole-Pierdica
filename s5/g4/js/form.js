const moduloForm = document.getElementById('modulo');

//document.getElementById('modulo').innerHTML = moduloForm[2].value;

let testo = "";

for (let i = 0; i < moduloForm.length; i++){
    testo += moduloForm[i].value + '<br>';

}

document.getElementById('mostra').innerHTML = 'Gli elementi del form sono: ' + testo;

function resetValori(){
    document.getElementById('modulo').reset();
}
