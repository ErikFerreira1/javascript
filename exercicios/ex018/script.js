const objs = [
  {
    nome: "Erik",
    idade: 20,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissão: "Programador",
      empresa: "Empresa x",
    },
    hobbies: ["Academia", "Programar", "jogar"],
  },
]

// Trasnformar objetos em JSON
const jsonData = JSON.stringify(objs) 

console.log(jsonData)
console.log(typeof(objs))

// Transformar JSON em objetos
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof(objData))
