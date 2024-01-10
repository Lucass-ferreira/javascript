var horaAgora = new Date()
var hora = horaAgora.getHours()

var Hr = window.document.getElementById('HoraAgr')
Hr.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12){
    document.getElementById('foto').innerHTML = '<img src="imagens/foto-amanhecer-320.webp" alt="foto-amanhecer">'
    document.body.style.background = '#efd459'
} else if (hora <= 18) {
    document.getElementById('foto').innerHTML = '<img src="imagens/#" alt="#">'
    document.body.style.background = '#'
} else {
    document.getElementById('foto').innerHTML = '<img src="imagens/#" alt="#">'
    document.body.style.background = '#'
}