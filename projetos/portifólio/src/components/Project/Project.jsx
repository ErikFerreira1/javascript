import "./Project.css";
const Project = () => {
  return (
    <div>
      <div className="page_project">
        <h1>PROJETOS</h1>
      </div>

      <div className="grid-container">
        <div className="image_project">
          <img src="../imageProject/ModeloProjeto.png" />
        </div>
        <div className="vertical_line"></div>
        <div className="about_project">
          <h2>E-COMMERCE</h2>
          <h3>SOBRE O PROJETO</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            aliquid cum ducimus modi explicabo labore sapiente qui dignissimos
            veritatis, voluptatem voluptate nemo velit repellendus iusto ipsa
            earum iste aut ad.
          </p>
          <h3>TECNOLOGIAS USADAS</h3>
          <div className="imagens">
            <img src="../logos/LogoJavaScript.png" alt="" />
            <img className="react" src="../logos/LogoReact.png" alt="" />
          </div>
          <div className="button">
            <input type="button" value="VISITAR" />
            <input type="button" value="REPOSITORIO" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
