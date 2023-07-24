import Img1 from "./assets/img1.jpg"; // Imagem em p
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Avançando em REACT!</h1>
      <div>
        <img src="/img2.jpg" alt="floresta" /> {/* imagem em public*/}
      </div>
      <div>
        <img src={Img1} alt="praia" /> {/* Imagem em assets*/}
      </div>
    </div>
  );
}

export default App;
