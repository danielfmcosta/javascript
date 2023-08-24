function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 18) {
                img.setAttribute('src', 'imagens/boy.jpg')
            } else if ( idade < 60) {
                img.setAttribute('src', 'imagens/man.jpg')
            } else {
                img.setAttribute('src', 'imagens/oldman.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18) {
                img.setAttribute('src', 'imagens/girl.jpg')
            } else if ( idade < 60) {
                img.setAttribute('src', 'imagens/woman.jpg')
            } else {
                img.setAttribute('src', 'imagens/oldwoman.jpg')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
    res.appendChild(img)
}