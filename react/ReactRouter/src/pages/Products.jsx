import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Products = () => {
  const { id } = useParams(); // Usado para acessar informações de um produto

  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, erro } = useFetch(url);

  return (
    <>
      <p>ID do produto: {id}</p>{" "}
      {/* Só aparece está informação pois esta linkado no route em app.jsx */}
      {erro && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
            <h1>{product.name}</h1>
            <p>R$:{product.price}</p>
            {/* Nested Routes */}
            <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
        </div>
      )}
    </>
  );
};

export default Products;
