import Events from "./Events"
import MyComponent from "./MyComponent"

const FirstComponent = () => { // Utilização de components
    return (
        <div>
            <h1>Meu Primeiro componente</h1>
            <MyComponent/>
            <Events/>
        </div>
    )
}

export default FirstComponent // Exportação do component