let list_num = []
function adicionar() {
    let num = document.getElementById('número')
    let lista = document.getElementById('lista')
    if (num.value > 100 || num.value < 1 || num.value.length == 0){
        alert('Digite um valor válido!')
    } else {
        if(list_num.indexOf(num.value) > -1) {
            alert(`O número ${num.value} já foi adicionado`)
            
        } else {
            list_num.push(num.value)
            let item = document.createElement('option')
            item.text = `O número ${num.value} foi adiconado `
            lista.appendChild(item)
        }
    }
}
function verificar() {
    let info = document.getElementById('info')
    info.innerHTML = `Ao todo temos, foram adicionados ${list_num.length} números`
    info.innerHTML += `<p>O maior valor foi ${Math.max(...list_num)} e o menor valor foi ${Math.min(...list_num)}</p>`
    // utilizasse o += para adionar mais um parágrafo
}
