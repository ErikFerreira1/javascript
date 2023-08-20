import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contapi from "./pages/Contapi";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contapi" element={<Contapi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
