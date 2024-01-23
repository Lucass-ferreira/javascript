function carregar() {
    var Hr = window.document.getElementById('HoraAgr')

    var horaAgora = new Date()
    var hora = horaAgora.getHours()
    Hr.innerHTML = `Agora são ${hora} horas.`

    var foto = window.document.getElementById('imagem')

    
    if ( hora >= 6 && hora < 12) {
        foto.src= 'imagens/foto-dia.jpg'
        document.body.style.background = '#59adf6'
    } else if (hora >= 12 && hora <= 18) {
        foto.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#efd459'
    } else if (hora >= 19 && hora <= 23) {
        foto.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#020219'
    } else {
        foto.src = 'imagens/foto-amanhecer.webp'
        document.body.style.background = '#0d485c'
    }
}

