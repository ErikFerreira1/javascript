import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Project from "./components/Project/Project";


function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <About />
        <Project />
      </div>
    </>
  );
}

export default App;
