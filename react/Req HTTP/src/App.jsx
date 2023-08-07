import "./App.css";
import { useState, useEffect } from "react";
// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products"; //requisição do json

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig } = useFetch(url);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 2 - adição produtos

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // 5 - refatorando post
    httpConfig(product, "POST"); // produto e método

    setName(""); // deixa a caixa vazia após o envio
    setPrice("");
  };

  return (
    <div>
      <h1>LISTA DE PRODUTOS</h1>
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - Preço R${product.price}
            </li>
          ))}
      </ul>
      <div className="add_product">
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Método de entrada de dados */}
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />{" "}
            {/* Pega o valor digitado e extrai após o evento */}
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
