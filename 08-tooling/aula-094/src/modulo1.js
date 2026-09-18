//EXPORTANDO TUDO

// const nome = 'lucas';
// const sobrenome = 'ferreira';
// const idade = 30;

// function soma(x, y){
//     return x + y;
// }

// export { nome, sobrenome, idade, soma};

//EXPORTANDO DIRETO
// export const nome = 'lucas';
// export const sobrenome = 'ferreira';
// export const idade = 30;

// export function soma(x, y){
//     return x + y;
// }

//EXPORTANDO COM DEFAULT
// export const nome = 'lucas';
// export const sobrenome = 'ferreira';
// export const idade = 30;

// export default function soma(x, y){
//     return x + y;
// }

//IMPORTANDO DEFAULT CONSTANTE
// const nome = 'lucas';
// const sobrenome = 'ferreira';
// const idade = 30;

// function soma(x, y){
//     return x + y;
// }

// export { nome as default, sobrenome, idade, soma}

//IMPORTANDO FUNÇÃO ANONIMA DEFAULT

const nome = 'lucas';
const sobrenome = 'ferreira';
const idade = 30;

export default (x, y) => x * y;

function soma(x, y){
    return x + y;
}

export { nome, sobrenome, idade, soma}

