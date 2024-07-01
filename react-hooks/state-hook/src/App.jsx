import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("White");

  return (
    <>
      <h1>My Color is : {color}</h1>
      <button type="button" onClick={() => setColor("black")}>
        Black
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Black
      </button>
      <button type="button" onClick={() => setColor("sky blue")}>
        Black
      </button>
    </>
  );
}

export default App;
