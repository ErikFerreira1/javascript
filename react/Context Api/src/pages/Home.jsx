import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>HOME</h1>
      <p>Valor do contador: {counter}</p>
    </>
  );
};

export default Home;
