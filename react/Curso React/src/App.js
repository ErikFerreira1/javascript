import logo from './logo.svg';
import './App.css'; 

function App() { 
    const name = 'Matheus' // funções apenas dentro da function app

    function sum(a,b) {
      return a + b
    }

    const url = 'https://via.placeholder.com/150'

  return (               
    <div className="App"> // Apenas classname não pode se usar class
      <h1>Olá React!</h1>
      <p>Olá, {name}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src= {url} alt="Minha imagem" />
    </div>
  );
}

export default App;
