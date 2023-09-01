import "./App.css";
import PraticaUseEffect from "./components/PraticaUseEffect";
import PraticaUseReduce from "./components/PraticaUseReduce";
import PraticaUseStates from "./components/PraticaUseStates";

function App() {
  return (
    <div>
      <h1>BOA TARDE!</h1>
      <h2>VAMOS PARA OS TRABALHOS</h2>
      <PraticaUseStates />
      <PraticaUseEffect />
      <PraticaUseReduce />
    </div>
  );
}

export default App;
