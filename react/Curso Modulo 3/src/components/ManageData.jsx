import { useState } from "react";

const ManageData = () => { //hook useState para atualizar informações em tempo real
  const [number, setNumber] = useState(15);
  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={()=> setNumber(25)}>Clique</button>
    </div>
  );
};

export default ManageData;
