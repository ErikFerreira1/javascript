import "./App.css";
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products"; //requisição do json

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Regatando dados
  useEffect(() => {
    async function fetchData() {
      {
        /* NÃO SE USA ASYNC DENTRO DE EFFECT PURO, DEVE SER FEITO DESSA FORMA*/
      }
      const res = await fetch(url); // resposta do json

      const data = await res.json(); // transformar em objeto para o front end

      setProducts(data);
    }
    fetchData();
  }, []);

  // 2 - adição produtos

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST", // Método que está sendo enviado
      headers: {
        // formato do input que está sendo enviado
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product), // transform para um objeto json
    });

    // 3 - carregamento dinâmico

    const addedProduct = await res.json() // transformando em objecto js

    setProducts((prevProducts)=> [...prevProducts, addedProduct])

    setName("") // deixa a caixa vazia após o envio 
    setPrice("")
  };

  

  return (
    <div>
      <h1>LISTA DE PRODUTOS</h1>
      <ul>
        {products.map((product) => (
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
