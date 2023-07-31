import { useState } from "react";

const UserDatails = () => {
  const [infoUser] = useState([
    { name: "Erik ", age: 20, prof: "Programer" },
    { name: "Jessica ", age: 16, prof: "Student" },
    { name: "Carlos ", age: 46, prof: "Teacher" },
    { name: "Ana ", age: 28, prof: "Designer" },
  ]);

  return (
    <div>
      {infoUser.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>
          <p>{user.age} anos</p>
          <p>Profissão: {user.prof}</p>

          {user.age >= 18 ? (
            <p>está qualificado!</p>
          ) : (
            <p>não está qualificado</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserDatails;
