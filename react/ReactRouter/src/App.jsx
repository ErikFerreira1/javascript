import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components

import Navbar from "./components/Navbar";

// pages

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota Dinâmica */}
          <Route path="/products/:id" element={<Products />} />{" "}
          {/* link para o componente products */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
