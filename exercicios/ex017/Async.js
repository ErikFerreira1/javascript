/*
function primeiraFuncao() {
    return new Promise((resolve) =>{ //promise é a forma mais antiga
                                    // async e await forma mais nova
        setTimeout(() => {
            console.log('Esperou isso aqui!')
            resolve()
        }, 1000);
    })
}
async function segundafuncao() {  // chamou a função
    console.log('iniciou')

    await primeiraFuncao() // await esperou o promise

    console.log('Terminou') // terminou
}

segundafuncao()
*/


function getUser(id) {
    return fetch(`https://regres.in/api/users?id=${id}`) //Recurso para requisições
    .then((data)=>data.json())
    .catch((err)=>console.log(err))
}

async function showUserName(id){ 
    try{ //Tratamento de erros com async
        const user = await getUser(id)

        console.log(`O nome do usuário é: ${user.data.first_name}`)
    } catch (err) {
        console.log(`Erro:${err}`)
    }
}
