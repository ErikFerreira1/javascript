import { useState } from "react"


const ConditionalRender = () => {
    const [x] = useState(true) // estado do x
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim! </p>} {/* Se x for verdadeiro */}
        {!x && <p>Agora x é falso!</p>}{/* Se x for falso */}
    </div>
  )
}

export default ConditionalRender