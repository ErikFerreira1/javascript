import "./Project.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Project extends React.Component {
  render() {
    const mainCarouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const smallerCarouselSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      <div className="Projeto">
        <Slider {...smallerCarouselSettings} className="small-carousel">
          <div>
            <img src="../public/test/Projeto.jpg" />
          </div>
          <div>
            <img src="../public/test/Projeto.jpg" />
          </div>
          {/* Adicione mais itens de slide conforme necessário */}
        </Slider>

        <Slider {...mainCarouselSettings} className="main-carousel">
          <div>
            <img src="../public/test/Projeto.jpg" />
          </div>
          <div>
            <img src="../public/test/Projeto.jpg" />
          </div>
          {/* Adicione mais itens de slide conforme necessário */}
        </Slider>

        <Slider {...smallerCarouselSettings} className="small-carousel">
          <div>
            <img src="../public/test/Projeto.jpg" />
          </div>
          <div>
            <img src="../public/test/Projeto.jpg" />
          </div>
          {/* Adicione mais itens de slide conforme necessário */}
        </Slider>
      </div>
    );
  }
}


export default Project;
