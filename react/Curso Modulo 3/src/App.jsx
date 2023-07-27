import Img1 from "./assets/img1.jpg"; // Imagem em assets
import "./App.css";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
function App() {
  const name = "José";
  const [nome] = useState("Maria");
  const cars = [
    { id: 1, Marca: "KIA", Cor: "Branco", Km: 12121, NewCar: false },
    { id: 2, Marca: "Renauld", Cor: "Azul", Km: 5497, NewCar: false },
    { id: 3, Marca: "Volvo", Cor: "Preto", Km: 0, NewCar: true },
  ];
  const ShowMessage = () => {console.log('Evento do componente pai!')} //componente pai
  return (
    <div className="App">
      <h1>Avançando em REACT!</h1>
      <div>
        <img src="/img2.jpg" alt="floresta" /> {/* imagem em public*/}
      </div>
      <div>
        <img src={Img1} alt="praia" /> {/* Imagem em assets*/}
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={nome} />
      {/* Três formas de passar o parâmetro. name = "", name={nome} ou com useStates  */}
      <CarDetails Marca="BMW" Km={10000} Cor="Azul" NewCar={false} />
      {/* passa o parâmetro na Apps.jsx */}
      <CarDetails Marca="VW" Km={4500} Cor="Vermelho" NewCar={false} />
      {/* Pode reaproveitar classes. */}
      <CarDetails Marca="Ferrari" Km={0} Cor="Amarelo" NewCar={true} />

      {/* Loop usando todas as funções. */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          Marca={car.Marca}
          Km={car.Km}
          Cor={car.Cor}
          NewCar={car.NewCar}
        />
      ))}
      <Fragments />
      <Container myValue='testing'>
          <p>E este é o conteúdo</p>
      </Container>
      <ExecuteFunction myFunction={ShowMessage}/> {/* Linkando com o componente filho */}
    </div>
  );
}

export default App;
