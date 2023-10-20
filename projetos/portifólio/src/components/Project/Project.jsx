import "./Project.css";
const Project = () => {
  return (
    <div className="Project">
      <h1>PROJETO</h1>
      <hr className="Separate_Project" />

      <img className="ImageProject" src="../imageProject/ModeloProjeto.png" />

      <hr className="Separate_Info" />

      <div className="Info_Project">
        <h2>E-COMMERCE</h2>

        <h3>SOBRE O PROJETO</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad neque
          placeat consequuntur. Corrupti aut doloremque, excepturi pariatur
          dignissimos deserunt provident unde delectus! Est, eum modi! Officiis,
          dolorem officia. Esse, sequi.
        </p>

        <h4>TECNOLOGIAS USADAS</h4>
        <img src="../logos/LogoJavaScript.png" />
        <img src="../logos/LogoReact.png" />

        <button>VISITAR</button>
        <button>REPOSITORIO</button>
      </div>

    </div>
  );
};

export default Project;
