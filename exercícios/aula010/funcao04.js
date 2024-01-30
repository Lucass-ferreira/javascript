function fatorial(numero){
    let fat = 1
    for (let cont = numero; cont > 1; cont--) {
        fat *= cont
    }
    return fat
}

console.log(fatorial(5))