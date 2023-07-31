import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title"


function App() {
  const n = 5;
  const [name] = useState("Erik");
  const redTitle = false;
  return (
    <>
      <div>
        <MyComponent />
        {/* CSS INLINE */}
        <p
          style={{
            color: "gold",
            borderTop: "2px solid white",
            fontSize: "30px",
          }}
        >
          CSS INLINE
        </p>
        {/* CSS INLINE DINÂMICO */}
        <h2 style={n < 10 ? { color: "red" } : { color: "green" }}> {n}</h2>
        <h2 style={n > 10 ? { color: "purple" } : { color: "green" }}>{n}</h2>
        <h1
          style={
            name === "Erik"
              ? { borderTop: "2px solid white", color: "gold" }
              : null
          }
        >
          {name}
        </h1>
        {/* CLASSE DINÂMICA */}
        <h2 className={redTitle === true ? "red-title" : "title"}>
          TÍTULO DINÂMICO
        </h2>{" "}
        {/* Troca o estilo dependendo do nome final da classe */}

        {/* CSS MODULES */}
        <Title/>
      </div>
    </>
  );
}

export default App;
