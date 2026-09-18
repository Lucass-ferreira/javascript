const nome = "Ana"
const  sobrenome = "carolina"

const falaNome = () => {
    console.log(nome, sobrenome);
};

//exportando coisas do modules
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;

//console.log(module.exports);


//exportando coisas do modules, jeito simplificado.

//exports.nome = nome;
//exports.sobrenome = sobrenome;

//this tbm pode ser usado, porem não tem muito uso;
//this.qualquerCoisa = 'O que eu quiser exportar.'

// console.log(exports);

//fazendo com classes
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

// exports.Pessoa = Pessoa

//exportando o modulo todo de uma vez só
module.exports = {
    nome, sobrenome, Pessoa
}