import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
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
      </div>
    </>
  );
}

export default App;
