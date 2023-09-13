import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <p className="Info1">OLÁ, MEU NOME É</p>
      <h1 className="Info2">ERIK</h1>
      <h1 className="Info3">FERREIRA</h1>
      <h3 className="Info4">DESENVOLVEDOR </h3>
      <h3 className="Info5">FRONT END</h3>

      <article className="Contato">
        <a href="https://github.com/ErikFerreira1" target="blank"><img src="../public/logos/LogoGitHub.png" /></a>
        <a href="https://www.linkedin.com/feed/" target="blank"><img src="../public/logos/LogoLinkedin.png" /></a>
        <a href="#"><img src="../public/logos/LogoEmail.png" /></a>
      </article>
    </div>
  );
};

export default Home;
