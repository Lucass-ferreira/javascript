const multiplicacao = require('./pastaZ/mod2');

console.log(multiplicacao(3, 2));

// ./ é pra frente/pra dentro da pasta que estou;
// ../ é pra tras/pasta anteriores da que estou

//duas variaveis do modules
console.log(__filename); //arquivo atual
console.log(__dirname); //pasta atual, mas é um caminho absoluto, vai pegar desde do C:

const path = require('path');
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'iamgens'))