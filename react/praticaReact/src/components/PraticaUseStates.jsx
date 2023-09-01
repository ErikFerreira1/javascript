import { useState } from "react";

const PraticaUseStates = () => {
  const [age, setAge] = useState(1);
  const [number, setNumber] = useState(1);
  const Contador = () => {
    setNumber(number + 1);
  };

  const handleAge = (e) => {
    e.preventDefault(); // impedi o comportamento normal do navegador, nessa caso seria enviar o input.
    console.log(age);
  };

  return (
    <>
      <hr />
      <h2>{number}</h2>
      <button onClick={Contador}>Clique aqui!</button>
      <hr />
      <form onSubmit={handleAge}>
        <input
          type="text"
          placeholder="Digite sua idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          max={120}
          min={0}
        />
        <input type="submit" value="enviar" />
      </form>
    </>
  );
};

export default PraticaUseStates;
