import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../Components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  //  const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <>
      <h1>HOME</h1>
      <p>Valor do contador: {counter}</p>
      {/* Alterando valor com texto */}
      <ChangeCounter />
    </>
  );
};

export default Home;
