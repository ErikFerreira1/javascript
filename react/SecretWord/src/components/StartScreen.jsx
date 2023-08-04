import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
      <h1>SECRET WORD</h1>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
