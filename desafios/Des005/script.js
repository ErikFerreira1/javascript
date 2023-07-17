let list_num = []
function adicionar() {
    let num = document.getElementById('número')
    let res = document.getElementById('option')
    if (num.value > 100 || num.value < 1 || num.value.length == 0){
        alert('Digite um valor válido!')
    } else {
        if(list_num.indexOf(num.value) > -1) {
            alert(`O número ${num.value} já foi adicionado`)
            
        } else {
            list_num.push(num.value)
            res.innerText = `Número ${num.value} foi adicionado`
        }
    }
}
function verificar() {
    let info = document.getElementById('info')
    info.innerHTML = `Ao todo temos, foram adicionados ${list_num.length} números`
}
