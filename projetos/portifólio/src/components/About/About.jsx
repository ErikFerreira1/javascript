import "./About.css";

const About = () => {
  return (
    <>
      <div className="AboutMe">
        
        <h1 className="About">SOBRE MIM </h1>
        
        <h1 className="NameSkills">SKILLS</h1>
        
        
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          unde deleniti amet incidunt possimus maiores dolorum quo? Fugiat
          accusantium, facilis tenetur perferendis itaque natus impedit
          quibusdam accusamus, voluptatem repudiandae ea?
          lorem
        </p>
        <hr />

        <div className="Skills" >
        
        <img src="../logos/LogoHTML5.png" />
        <img src="../logos/LogoCSS3.png" />
        <img src="../logos/LogoJavaScript.png" />
        <img className="React" src="../logos/LogoReact.png" />
        <img className="Python" src="../logos/LogoPython.png" />
        </div>
      </div>
    </>
  );
};

export default About;
