function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crincamas.webp')
            }else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/adolescentemas.webp')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultomas.webp')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idosomas.webp')
            }

        }else {
            gênero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crincafem.webp')
            }else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/adolescentefem.webp')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultofem.webp')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idosafem.webp')
            }
            
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}