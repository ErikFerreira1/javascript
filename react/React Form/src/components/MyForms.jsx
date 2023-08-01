import { useState } from "react";
import "./MyForms.css";

const MyForms = () => {
    // Gerenciamento de dados
    const[name, setName] = useState()
    const[email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) => { {/* Envio de formulários */}
        event.preventDefault(); // Faz a página não recarregar
        console.log("Enviando o formulário") 
        console.log(name, email)
    } 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Crianção de form */}
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
          {/* Label sobre input */}
          <label>
            <span>E-mail:</span>
           <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} /> {/* Outro método para gerenciamento de dados */} 
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;
