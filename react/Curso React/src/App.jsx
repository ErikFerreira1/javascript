//COMPONENTS
import Firstcomponent from "./components/FirstComponent" //importação de componente
import TemplateExpressions from "./components/TemplateExpressions"
import Challenge from "./components/Challenge"


//CSS
import './App.css'



function App() {
  return (
    <div> 
      <h1>Hello World</h1> {/* Dentro do react utilizasse este metódo para adicionar comentários*/ }
      <h2>
        Estou muito feliz em estar aprendendo react!
      </h2>
      <TemplateExpressions/>
      <Firstcomponent/>
      <Challenge/>
    </div>
  )
}

export default App
