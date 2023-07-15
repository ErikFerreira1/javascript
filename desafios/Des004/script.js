function verificar() {
    let número = document.getElementById('número')
    let tab = document.getElementById('seltab')
    if(número.value < 0 || número.value.length == 0) {
        alert('[ERRO] Número inválido')
    } else {
        let num = Number(número.value)
        let c = 1
        while(cont <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            tab.appendChild(item)
            c++
            }
        }

        
    }
