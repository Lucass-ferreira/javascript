function par_ou_impar(numero) {
    if (numero % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log(par_ou_impar(2))


function soma(num1=0, num2=0) {
    return num1 + num2
}

console.log(soma(4))


let v = function(x){
    return x*2
}

console.log(v(3))


function fatorial(numero){
    let fat = 1
    for (let cont = numero; cont > 1; cont--) {
        fat *= cont
    }
    return fat
}

console.log(fatorial(5))


//recursividade
function fatorial(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(5))