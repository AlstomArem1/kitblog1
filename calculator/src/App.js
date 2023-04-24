import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");

  const [number1, setNumber1] = useState("");
  const hand_change_ber1 = (event1) => {
    setNumber1(event1.target.value);
  }
  const [number2, setNumber2] = useState("");
  const hand_change_ber2 = (event2) => {
    setNumber2(event2.target.value);
  }
  const hand_multiplication = (e) => {
    e.preventDefault();
    setText(number1 * number2);
    setNumber1("");
    setNumber2("");
  }
  const hand_division = (e) => {
    e.preventDefault();
    setText(Math.round((number1/number2)*100)/100);
    setNumber1("");
    setNumber2("");
  }
  const hand_sum = (e) => {
    e.preventDefault();
    setText(Number(number1) + Number(number2));
    setNumber1("");
    setNumber2("");
  }
  const hand_Subtraction = (e) => {
    e.preventDefault();
    setText(number1 - number2);
    setNumber1("");
    setNumber2("");
  }

  return (
    <div class="center">
      <h1 class="tranron">ReactJS Calculation</h1>
      <form>
        <input
          type='number'
          placeholder='Number1:'
          value={number1}
          onChange={hand_change_ber1}>
        </input>
        <input
          type='number'
          placeholder='Number2:'
          value={number2}
          onChange={hand_change_ber2}>
        </input>
      </form>

      <h1 class="result">result: {text}</h1>
      <button onClick={hand_sum}>summation</button>
      <button onClick={hand_Subtraction}>Subtraction</button>
      <button onClick={hand_multiplication}>multiplication</button>
      <button onClick={hand_division}>division</button>
    </div>

  );
}

export default App;
