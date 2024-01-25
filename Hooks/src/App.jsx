import { useState } from "react"; //Here usestate is a hook which manage the ui of our web-page and render the changes in our webpage
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //Now demonstrating the concept of hooks
  let [Counter, setCounter] = useState(9);

  // Creating a function to add the value
  let addValue = () => {
    setCounter(Counter + 1);
    if (Counter == 20) {
      setCounter(Counter);
    }
  };
  //Creating another method to remove the value
  let removeValue = () => {
    setCounter(Counter - 1);
    if (Counter == 0) {
      setCounter(Counter);
    }
  };
  return (
    <>
      <h1>Just Learning Hooks concept</h1>
      <h3>Counter Value :- {Counter}</h3>
      <button onClick={addValue}>Add value {Counter}</button>
      <button onClick={removeValue}>Remove value value {Counter}</button>
      <p>footer : {Counter}</p>
    </>
  );
}

export default App;
