import "./About.css";

const About = () => {
  return (
    <>
      <div className="Page_grid">
        <div className="About_page">
          <h1>SOBRE MIM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eum
            ipsum doloremque fugiat repellendus omnis quaerat sed illum neque
            aut iusto cumque cum consequuntur asperiores iste quia, placeat
            similique tempore.
          </p>

          <div className="Skills_page">
            <h1>SKILLS</h1>
            <img src="../logos/LogoHTML5.png" />
            <img src="../logos/LogoCSS3.png" />
            <img src="../logos/LogoJavaScript.png" />
            <img src="../logos/LogoReact.png" />
            <img src="../logos/LogoPython.png" />
          </div>
        </div>
        <div className="Me_page">
          <img src="../test/Exemplo.png" />
        </div>
      </div>
    </>
  );
};

export default About;
