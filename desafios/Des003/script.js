function verificar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
   
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRI] Faltam dados!')

    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value) 
        let f = Number(fim.value) 
        let p = Number(passo.value)
        if(i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c <= f; c -= p) {
                res.innerHTML += `${c}`
            }
        }
        
    }
}   