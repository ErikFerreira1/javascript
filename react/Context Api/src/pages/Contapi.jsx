import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Contapi = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>CONTEXT API</h1>
      <p>Valor do contador: {counter}</p>
    </>
  );
};

export default Contapi;
