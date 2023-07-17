let list_num = []
function adicionar() {
    let num = document.getElementById('número')
    let res = document.getElementById('option')
    if (num.value > 100 || num.value < 1 || num.value.length == 0){
        alert('Digite um valor válido!')
    } else if(list_num.indexOf(num) == -1) {
        res.innerText = `Número ${num.value} foi adicionado`
        list_num.push(num)
    } else {
        alert(`O número ${num.value} já foi adicionado`)
    }
}
