function clicar() {
    var numero1 = window.document.querySelector('input#inumero1')
    var numero2 = window.document.querySelector('input#inumero2')
    var passo = window.document.querySelector('input#ipasso')
    var inicio = Number(numero1.value)
    var fim = Number(numero2.value)
    var pas = Number(passo.value)
    var resp = window.document.querySelector('div#resp')

    if( inicio == 0 || fim == 0 || passo == 0 ) {
        window.alert('[ERRO] verifique os dados e tente novamnete!')
    } else if (inicio < fim) {
        var cont = inicio
        while (cont <= fim) {
            resp.innerHTML = `${cont}`
            cont++
        }
    } else {
        var cont = inicio
        while (cont >= fim) {
            resp.innerHTML = `${cont}`
            cont = cont - pas
        }
    }
}