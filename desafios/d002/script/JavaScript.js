var nasc = window.document.getElementById('inasc')
var resp = window.document.getElementById('res')

var sexo1 = window.document.getElementById('msexo')
var sexo2 = window.document.getElementById('fsexo')

if( sexo1 == 'on'){
    var sex = 'Homem'
} else if (sexo2 == 'on') {
    var sex = 'Mulher'
}

function clicar() {
    var nascim = Number(nasc.value)
    resp.innerHTML = `${nascim} ${sex} ${res1}`
}