import "./App.css";
import { useState, useEffect } from "react";
// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products"; //requisição do json

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading, erro } = useFetch(url);
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
    httpConfig(product, "POST"); // data e método

    setName(""); // deixa a caixa vazia após o envio
    setPrice("");
  };

  const handleDelete = (id) => {

    const excluir = (id)
    httpConfig(excluir, "DELETE")
  };

  return (
    <div>
      <h1>LISTA DE PRODUTOS</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {erro && <p>{erro}</p>}
      {!loading && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - Preço R${product.price}
                <button onClick={() => handleDelete(product.id)} value={product.id}>Excluir</button>
              </li>
            ))}
        </ul>
      )}
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
          {/* 7 - state de loading no post */}
          {loading && <input type="submit" value="Aguarde" disabled />}{" "}
          {/* Desabilita o botão então estiver no loading */}
          {!loading && <input type="submit" value="Criar" />}{" "}
          {/* Habilita o botão quando não estiver no loading */}
        </form>
      </div>
    </div>
  );
}

export default App;
