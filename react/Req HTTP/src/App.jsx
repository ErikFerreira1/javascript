import "./App.css";
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products"; //requisição do json

function App() {
  const [products, setProducts] = useState([]);

  // 1 - Regatando dados
  useEffect(() => {
    async function fetchData() { {/* NÃO SE USA ASYNC DENTRO DE EFFECT PURO, DEVE SER FEITO DESSA FORMA*/}
      const res = await fetch(url); // resposta do json

      const data = await res.json(); // transformar em objeto para o front end

      setProducts(data);
    }
    fetchData();
  }, []);


  return (
    <div>
      <h1>LISTA DE PRODUTOS</h1>
      <ul>
        {products.map((product)=> (
          <li key={product.id}>{product.name} - Preço R${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
