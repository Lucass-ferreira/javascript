//IMPORTANDO INDIVIDUAL
// import { nome, sobrenome, idade, soma} from './modulo1';

// console.log(nome, sobrenome, idade);
// console.log(soma(5, 5));

//IMPORTANDO TUDO
// import * as MeuModulo from './modulo1'

// console.log(MeuModulo)

//IMPORTANDO COM DEFAULT
// import valorDefault from './modulo1'

// console.log(valorDefault(5, 5))

//IMPORTANDO DEFAULT CONSTANTE
// import valorDefault from './modulo1'

// console.log(valorDefault)

//IMPORTANDO FUNÇÃO ANONIMA DEFAULT
import valorDefault, { nome, sobrenome, idade, soma} from './modulo1'

console.log(valorDefault(5, 40));
console.log(nome, sobrenome, idade, soma(5, 5));
