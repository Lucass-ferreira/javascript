function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var texto_ano = document.getElementById('inasc')
    var res = document.querySelector('div#res')

    if (texto_ano.value.length == 0 || Number(texto_ano.value) > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = ''
    } else if (texto_ano.value < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = ''
    } else {
        var idade = ano_atual - Number(texto_ano.value)
        var isexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (isexo[0].checked) {
            genero = 'Masculino'

            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src' , 'imagens/m-bebe.jpg')
                res.innerHTML = `Detectamos:<br> - Um Bebê <br>`
            } else if (idade < 12) {
                //criança
                res.innerHTML = `Detectamos:<br> - Uma Criança <br>`
                img.setAttribute('src' , 'imagens/m-criança.jpg') 
            } else if ( idade < 18) {
                //adolescente
                res.innerHTML = `Detectamos:<br> - Um Adolescente <br>`
                img.setAttribute('src' , 'imagens/m-adolescente.jpg') 
            } else if ( idade < 30) {
                //adulto
                res.innerHTML = `Detectamos:<br> - Um Homem <br>`
                img.setAttribute('src' , 'imagens/m-adulto.jpg')
            } else if (idade < 60) {
                //meia-idade
                res.innerHTML = `Detectamos:<br> - Pessoa de Meia idade <br>`
                img.setAttribute('src' , 'imagens/m-meia.jpg') 
            } else {
                //idoso
                res.innerHTML = `Detectamos:<br> - Um Idoso <br>`
                img.setAttribute('src' , 'imagens/m-idoso.jpg') 
            }

            res.innerHTML += `- Sexo: ${genero} <br> - Idade: ${idade} anos.`

        } else if (isexo[1].checked) {
            genero = 'Feminino'

            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

            if (idade >= 0 && idade < 5) {
                //bebe
                res.innerHTML = `Detectamos:<br> - Uma Bebê <br>`
                img.setAttribute('src' , 'imagens/f-bebe.jpg')
            } else if (idade < 12) {
                //criança
                res.innerHTML = `Detectamos:<br> - Uma Criança <br>`
                img.setAttribute('src' , 'imagens/f-criança.jpg') 
            } else if ( idade < 18) {
                //adolescente
                res.innerHTML = `Detectamos:<br> - Uma Adolescente <br>`
                img.setAttribute('src' , 'imagens/f-adolescente.jpg') 
            } else if ( idade < 30) {
                //adulto
                res.innerHTML = `Detectamos:<br> - Uma Mulher <br>`
                img.setAttribute('src' , 'imagens/f-adulto.jpg') 
            } else if (idade < 60) {
                //meia-idade
                res.innerHTML = `Detectamos:<br> - Pessoa de Meia Idade <br>`
                img.setAttribute('src' , 'imagens/f-meia.jpg') 
            } else {
                //idoso
                res.innerHTML = `Detectamos:<br> - Uma Idosa <br>`
                img.setAttribute('src' , 'imagens/f-idoso.jpg')
            }

            res.innerHTML += `- Sexo: ${genero} <br> - Idade: ${idade} anos.`
        }
    }
    res.appendChild(img)
}