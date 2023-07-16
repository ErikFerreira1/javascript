function verificar() {
    let número = document.getElementById('número')
    let tab = document.getElementById('seltab')
    if(número.value < 0 || número.value.length == 0) {
        alert('[ERRO] Número inválido')
    } else {
        let num = Number(número.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
            }
        }

        
    }
