function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date ()
//var hora = data.getHours()
var hora = 20
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    img.src = 'imagens/manhã.jpg'
    document.body.style.background = '#BEA07C'
}else if (hora >= 12 && hora < 18){
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#74495C'
}else {
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#09213D'
}
}