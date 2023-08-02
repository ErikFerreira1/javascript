import { useState } from "react";
import "./MyForms.css";

const MyForms = ({ user }) => {
  // Controlled inputs
  const [name, setName] = useState(user ? user.name : " ");
  const [email, setEmail] = useState(user ? user.email : " ");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    {
      /* Envio de formulários */
    }
    event.preventDefault(); // Faz a página não recarregar
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);

    //Limpando o submite
    setName(""); // após cliclar no submit, o formulario é limpo
    setEmail("");
    setBio("");
    setRole("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Crianção de form */}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name} // dentro do input
          />

          {/* Label sobre input */}
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email} //dentro do input
            />{" "}
            {/* Outro método para gerenciamento de dados */}
          </label>
          <label>
            {" "}
            {/* textarea funciona como um input:text */}
            <span>Bio</span>
            <textarea
              name="bio"
              placeholder="Fale sobre você!"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            ></textarea>
          </label>
          <label>
            <span>Função</span>
            <select
              name="role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
              <option value="programer">programer</option>
              <option value="tester">tester</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
