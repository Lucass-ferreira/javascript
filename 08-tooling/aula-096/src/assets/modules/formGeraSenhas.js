import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-geradas')

const qtdCaracteres = document.querySelector('.qtdCar');
const chkMaisculas = document.querySelector('.chk-maiuscula');
const chkMinusculas = document.querySelector('.chk-minuscula');
const chkNumero = document.querySelector('.chk-num');
const chkSimbolo = document.querySelector('.chk-simb');

const btn = document.querySelector('.btn-gera-senha')


export default () => {
    btn.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
        console.log(gera())
    })
}

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaisculas.checked,
        chkMinusculas.checked,
        chkNumero.checked,
        chkSimbolo.checked
    );

    return senha || 'Nada selecionada';
}