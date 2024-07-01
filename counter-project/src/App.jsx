import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    counter = counter + 1;
    if (counter > 20) {
      alert("You can't increase the value");
      return false;
    }
    setCounter(counter);
  };

  const removeValue = () => {
    counter -= 1;
    if (counter < 0) {
      alert("You can't remove value");
      return false;
    }
    setCounter(counter);
  };

  return (
    <>
      <h1>Hooks With Harry</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>

      <p>Hello! How are you?: {counter}</p>
    </>
  );
}

export default App;
