// setTimeOut(function, tempo em milisegundos)
// Executa uma função, depois de esperar em um número especifico de milisegundos
// setInterval(function, milisegundos)
// É o mesmo que o setTimeOut(), mas repete a função contuamente

function clicou() {
    
    document.getElementById('teste').innerHTML = 'Começou a contagem'
    //Executa apenas uma vez após o tempo
    tempo = setTimeout(function(){
        document.body.style.backgroundColor = 'lightblue'
    }, 3000) // tempos após a função 
}

function parou(){
    clearTimeout(tempo)
    document.getElementById('teste').innerHTML = 'Parou a contagem'
    document.body.style.backgroundColor = 'white'
}