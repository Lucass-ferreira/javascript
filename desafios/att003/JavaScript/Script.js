function clicar() {
    var numero1 = window.document.querySelector('input#inumero1')
    var numero2 = window.document.querySelector('input#inumero2')
    var passo = window.document.querySelector('input#ipasso')
    var inicio = Number(numero1.value)
    var fim = Number(numero2.value)
    var pas = Number(passo.value)
    var resp = window.document.querySelector('div#resp')

    if( numero1.value.length == 0 || numero2.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] verifique os dados e tente novamnete!')
    } else if (inicio < fim) {
        resp.innerHTML = 'Contando: '
        for (var cont = inicio; cont <= fim; cont += pas) {
            resp.innerHTML += ` ${cont} \u{1F449}`
        }
        resp.innerHTML += `\u{1F3C1}`
    } else {
        resp.innerHTML = 'Contando: '
        for (var cont = inicio; cont >= fim; cont -= pas) {
            resp.innerHTML += ` ${cont} \u{1F449}`
        }
        resp.innerHTML += `\u{1F3C1}`
    }
}