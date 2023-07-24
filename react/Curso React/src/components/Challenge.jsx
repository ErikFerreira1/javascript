const Challenge = () => {

    const valor1 = 3
    const valor2 = 5

    const handleClick = () => {
        
    }

    return (
        <div>
            <p>{valor1}</p>
            <p>{valor2}</p>
            <button onClick={() => console.log(valor1 + valor2)}>Soma</button>
        </div>
    )
}
export default Challenge