function clicou() {
    tempo = setInterval(function(){
        var cronometro = document.getElementById('teste').innerHTML
        var soma = parseInt(cronometro) + 1
        document.getElementById('teste').innerHTML = soma
    }, 1000)
    
}

function parou(){
    clearInterval(tempo)
    
}