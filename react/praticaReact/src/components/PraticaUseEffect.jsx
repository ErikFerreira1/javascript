import { useEffect, useState } from "react";

const PraticaUseEffect = () => {
  // 1 - useEffect, sem dependências
  // executado sempre que for re-renderizado
  useEffect(() => {
    console.log("Estou sendo executado");
  });
  const [number, setNumber] = useState(1);
  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de deps, vazio
  // executado apenas uma vez
  useEffect(() => {
    console.log("Estou sendo executado apenas uma vez");
  }, []);

  // 3 - item no array de deps.
  // executado quando anotherNumber muda
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber é executado");
    }
  }, [anotherNumber]);


  // 4 - cleanup do useEffect
  useEffect(() => {

    const timer = setTimeout(() => {
      console.log("hello world")
    }, 2000)
    return () => clearTimeout(timer)
  }, [anotherNumber])
  return (
    <>
      <hr />
      <h1>UseEffect</h1>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Clique</button>
      <p>AnotherNumber: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber
      </button>
    </>
  );
};

export default PraticaUseEffect;
