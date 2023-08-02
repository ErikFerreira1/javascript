import "./App.css";
import MyForms from "./components/MyForms";

function App() {
  return (
    <>
      <div>
        <h1>Forms</h1>
        <MyForms
          user={{ name: "Erik", email: "erikferreira03@outlook.com " }}
        />
      </div>
    </>
  );
}

export default App;
