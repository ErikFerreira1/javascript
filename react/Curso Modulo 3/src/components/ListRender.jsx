import { useState } from "react";

const ListRender = () => {
  // Renderização de lista
  const [users, setUsers] = useState([ // linka o setUsers no json
    { id: 1, name: "Erik", age: 20 },
    { id: 2, name: "Jose", age: 12 },
    { id: 3, name: "Fer", age: 76 }
  ]);

  const DeleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)// Randomiza um número de 0 a 4
    
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id)// Filtra números diferentes do número randomizado
    })
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={DeleteRandom}>Delete random numbers</button>
    </div>
  );
};

export default ListRender;
