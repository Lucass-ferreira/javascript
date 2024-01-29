 let valores = [3, 4, 7, 1, 9]
/*
modo tradicional

for (let posicao = 0 ; posicao <= valores.length ; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}
*/

//metodo simplificado
for (let posicao in valores) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}