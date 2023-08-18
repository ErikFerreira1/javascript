import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components

import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

// pages

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Info from "./pages/info";
import NotFund from "./pages/NotFund";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota Dinâmica */}
          <Route path="/products/:id" element={<Products />} />{" "}
          {/* link para o componente products */}
          {/* Nested Routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* Search */}
          <Route path="/search" element={<Search />} />
          {/* Redirecionamento de rotas */}
          <Route path="/company" element={<Navigate to={"/about"} />} />
          {/* Error 404 */}
          <Route path="*" element={<NotFund />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
