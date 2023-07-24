const Events = () => {
  const handleMyEvent = (e) => {
    // O e serve para mostrar configs sobre o evento no console
    console.log(e);
    console.log("Ativou o evento!");
  };

  const RenderSomething = (x) => {
    // Renderizando HTML fora do JSX
    if (x) {
      return <h1>Renderizou isso.</h1>;
    } else {
      return <h1>Renderizou isso tbm.</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>{" "}
        {/*Em Eventos sempre usa handle em seguida o evento*/}
      </div>
      <div>
        <button onClick={() => console.log("Clicou")}>
          Clique aqui também
        </button>{" "}
        {/*Caso a função seja pequena, pode usar desse modo*/}
      </div>

      <div>
        {RenderSomething(true)} {/*Importando o HTML fora do jsx*/}
        {RenderSomething(false)} {/*Importando o HTML fora do jsx*/}
      </div>
    </div>
  );
};
export default Events;
