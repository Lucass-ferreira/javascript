 let numero = [3, 4, 7, 1, 9]

numero[3] = 5
numero.push(6)

numero.sort()
console.log(numero)
console.log(`O vetor tem ${numero.length} posições `)
console.log(`O primeiro valor é ${numero[0]}`) 

/*
modo tradicional

for (let posicao = 0 ; posicao <= numero.length ; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${numero[posicao]}`)
}
*/

//metodo simplificado

for (let posicao in numero) {
    console.log(`A posição ${posicao} tem o valor ${numero[posicao]}`)
}