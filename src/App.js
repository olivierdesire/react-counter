import "./App.css";
import { useState } from "react";
import logo from "./assets/img/calculette.png";

function App() {
  const [counter, setCounter] = useState(0);
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(true);
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
        <p>React Counter</p>
      </header>
      <main>
        <div className="list-counter">
          <button
            onClick={() => {
              setCounter(counter - 1);
              counter - 1 === 0 ? setButton1(false) : setButton1(true);
              counter - 1 === 10 ? setButton2(false) : setButton2(true);
            }}
            style={{ visibility: button1 ? "visible" : "hidden" }}
          >
            −
          </button>
          <div className="counter">{counter}</div>
          <button
            onClick={() => {
              setCounter(counter + 1);
              // console.log(counter);
              counter + 1 === 10 ? setButton2(false) : setButton2(true);
              counter + 1 === 0 ? setButton1(false) : setButton1(true);
            }}
            style={{ visibility: button2 ? "visible" : "hidden" }}
          >
            +
          </button>
        </div>
        <button
          className="reset"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </main>
    </div>
  );
}

export default App;
