let num = window.document.querySelector('input#inumero')
let tabela = window.document.querySelector('select#resultado')
let resp = window.document.querySelector('#resp')

let add = []

function adicionar() {
    if (num.value >= 1 && num.value <= 100 && !lista(num.value, add )) {
        add.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor: ${num.value} definido.`
        tabela.appendChild(item)
    } else {
        window.alert('Valor inválido ou já adicionado a lista.')
    }

    num.value = ''
    num.focus()
}

function lista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1) {
        return true
    }
    else{
        return false
    }
}

function finalizar() {
    if (add.length == 0) {
        window.alert('[ERRO] Adicione um valor antes de finalizar.')
    } else {

        let max = add[0]
        let min = add[0]
        let soma = 0
        let media = 0

        for (let posicao in add){
            soma += add[posicao]

            if (add[posicao] > max){
                max = add[posicao]
            }

            if (add[posicao] < min){
                min = add[posicao]
            }
        }

        media = soma / add.length

        resp.innerHTML = ''
        resp.innerHTML += `<p> - Ao todo, temos ${add.length} números cadastrados.</p>`
        resp.innerHTML += `<p> - O maior valor digitado foi ${max}</p>`
        resp.innerHTML += `<p> - O menor valor digitado foi ${min}</p>`
        resp.innerHTML += `<p> - Somando todos os valores, temos ${soma}</p>`
        resp.innerHTML += `<p> - A média dos valores digitados é ${media}</p>`
    }
}