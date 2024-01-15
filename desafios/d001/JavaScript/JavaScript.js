var horaAgora = new Date()
var hora = horaAgora.getHours()

var Hr = window.document.getElementById('HoraAgr')
Hr.innerHTML = `Agora são ${hora} horas.`

if ( hora >= 6 && hora < 12) {
    document.getElementById('foto').innerHTML = '<img src="imagens/foto-dia.jpg" alt="foto-dia">'
    document.body.style.background = '#59adf6'
} else if (hora >= 12 && hora <= 18) {
    document.getElementById('foto').innerHTML = '<img src="imagens/foto-tarde.jpg" alt="foto-tarde">'
    document.body.style.background = '#efd459'
} else if (hora >= 19 && hora <= 23) {
    document.getElementById('foto').innerHTML = '<img src="imagens/foto-noite.jpg" alt="foto-noite">'
    document.body.style.background = '#020219'
} else {
    document.getElementById('foto').innerHTML = '<img src="imagens/foto-amanhecer.webp" alt="foto-amanhecer">'
    document.body.style.background = '#0d485c'
}