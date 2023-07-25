import { useState } from "react";

const ListRender = () => {
  // Renderização de lista
  const [list] = useState(["Erik", "José", "Maria"]);
  const [users] = useState([
    { id: 1, name: "Erik", age: 20 },
    { id: 34734, name: "Cu", age: 31 },
  ]);

  return (
    <div>
      <ul>
        {list.map(
          (
            item,
            i //o map vai nomear cada objeto da lista e logo após o item será jogado na lista.
          ) => (
            <li key={i}>{item}</li>
          )
        )}
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
