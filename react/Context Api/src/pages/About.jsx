import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  const { counter } = useCounterContext();
  return (
    <>
      <h1>SOBRE</h1>
      <p>Valor do contador: {counter}</p>
    </>
  );
};

export default About;
