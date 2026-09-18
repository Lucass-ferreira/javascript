// no E6 se usa imports, aqui agr é require()

//exporta o module todo
// const mod1 = require('./mod1');

//exporta uma chave espessifica
// const mod1 = require('./mod1').nome;

// console.log(mod1)

//destructor
// const {nome, sobrenome} = require('./mod1')

// console.log(nome, sobrenome)

//fazendo com classes
//quando usamos caminhos é modulos nosso, modulos que é do node ou do npm não precisa de caminhos
const path = require('path')
const { Pessoa } = require('./mod1')

const pessoa1 = new Pessoa('luiz')
console.log(pessoa1)
// console.log(path)

console.log(Pessoa)