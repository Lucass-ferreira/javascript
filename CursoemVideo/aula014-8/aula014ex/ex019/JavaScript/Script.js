function clicar() {
    var numero = window.document.querySelector('input#inumero')
    var resp = window.document.querySelector('select#itabuada')
    var num = Number(numero.value)

    if (numero.value.length == 0) {
        window.alert('[ERRO] Por favor digite um número')
    } else {
        var cont = 1
        resp.innerHTML = ''
        while ( cont <= 10) {
        var item = document.createElement('option')
        item.text = `${num} x ${cont} = ${num*cont}`
        item.value = `resp${cont}`
        resp.appendChild(item)
        cont++
        }
    }
}

