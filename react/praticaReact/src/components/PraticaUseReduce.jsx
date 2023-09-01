import React, { useReducer, useState } from "react";

const PraticaUseReduce = () => {
  // 1 - useReduce
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - avançando no useReducer
  const initialtaks = [
    { id: 1, text: "fazer alguma coisa" },
    { id: 2, text: "fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {
    switch(action.type) {
      case "ADD": 
        const newTask = {
          id: Math.random(),
          text: teaskText
        }
        setTeskText ("")

        return[...state, newTask]
    }
  };

  const [teaskText, setTeskText] = useState("");

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialtaks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({type:"ADD"})
  };
  return (
    <div>
      <hr />
      <h1>UseReduce</h1>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas: </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTeskText(e.target.value)}
          value={teaskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </div>
  );
};

export default PraticaUseReduce;
