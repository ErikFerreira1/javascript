import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <p className="Info1">OLÁ, MEU NOME É </p>
      <h1 className="Info2">
        ERIK
        <b className="Info3">
          <br />
          FERREIRA
        </b>
        <b className="Info4">
          <br />
          DESENVOLVEDOR <b className="Info5"> FRONT-END </b>
        </b>
      </h1>

      <article className="Contato">
        <a href="https://github.com/ErikFerreira1" target="blank">
          <img src="../logos/LogoGitHub.png" />
        </a>
        <a href="https://www.linkedin.com/feed/" target="blank">
          <img src="../logos/LogoLinkedin.png" />
        </a>
        <a href="#">
          <img src="../logos/LogoEmail.png" />
        </a>
      </article>
    </div>
  );
};

export default Home;
