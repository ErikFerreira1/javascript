import MyComponent from "./MyComponent"

const TemplateExpressions = ()  => {
   
   const name = "Erik"
   const date = {
        age: 20,
        profissão: "Programador"
   }
    return (
        <div>
            <h1>Olá, {name}!</h1>
            <h1>Você é {date.profissão}</h1> {/*Utilização de JS dentro do JSX*/}
            <MyComponent/>
        </div>
    )
}
export default TemplateExpressions