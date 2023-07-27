const ExecuteFunction = ({ myFunction }) => {
  //Executar uma função do componente filho para o componente pai
  return (
    <div>
      <button onClick={myFunction}>Executar função</button>
    </div>
  );
};

export default ExecuteFunction;
