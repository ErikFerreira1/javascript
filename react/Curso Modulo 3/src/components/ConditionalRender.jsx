import { useState } from "react"


const ConditionalRender = () => {
    const [x] = useState(true) // estado do x
    const [name] = useState("João")
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim! </p>} {/* Se x for verdadeiro */}
        {!x && <p>Agora x é falso!</p>}{/* Se x for falso */}
        <h1>if ternário</h1>
        {name === "Erik" ? (
            <div>
                <p>O nome é João</p>
            </div>
        ):(
            <div>
                <p>Nome não encontrado</p>
                <button onClick={() => {name = useState("João")}}>Clique</button>
            </div>

        )}
    </div>
  )
}

export default ConditionalRender