import GeraCPF from './assets/modules/GeraCPF'

import './assets/css/style.css'

(function(){
    const geraCpf = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML += geraCpf.geraNovoCpf();
    
    const btnCpf = document.querySelector('.btn-gera');
    btnCpf.addEventListener('click', () => {
        location.reload()
    });
})()