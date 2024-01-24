function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var texto_ano = document.getElementById('inasc')
    var res = document.querySelector('div#res')

    if (texto_ano.value.length == 0 || Number(texto_ano.value) > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano_atual - Number(texto_ano.value)
        var isexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (isexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src' , 'imagens/m-bebe.jpg')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src' , 'imagens/m-criança.jpg') 
            } else if ( idade < 18) {
                //adolescente
                img.setAttribute('src' , 'imagens/m-adolescente.jpg') 
            } else if ( idade < 30) {
                //adulto
                img.setAttribute('src' , 'imagens/m-adulto.jpg') 
            } else if (idade < 60) {
                //meia-idade
                img.setAttribute('src' , 'imagens/m-meia.jpg') 
            } else {
                //idoso
                img.setAttribute('src' , 'imagens/m-idoso.jpg') 
            }
        } else if (isexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src' , 'imagens/f-bebe.jpg')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src' , 'imagens/f-criança.jpg') 
            } else if ( idade < 18) {
                //adolescente
                img.setAttribute('src' , 'imagens/f-adolescente.jpg') 
            } else if ( idade < 30) {
                //adulto
                img.setAttribute('src' , 'imagens/f-adulto.jpg') 
            } else if (idade < 60) {
                //meia-idade
                img.setAttribute('src' , 'imagens/f-meia.jpg') 
            } else {
                //idoso
                img.setAttribute('src' , 'imagens/f-idoso.jpg') 
            }
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
}