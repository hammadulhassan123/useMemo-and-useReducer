import { useMemo, useState } from "react";
import './App.css'

function UseMemo() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const expensiveFunction = (n) => {
    console.log("Function re-rendered!");
    let total = 0;
    for (let i = 1; i < 100000000; i++) {
      total += i;
    }
    return total;
  };

  const sum = useMemo(() => expensiveFunction(number), [number]);

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
      />
      <input onChange={(e) =>setNumber(e.target.value)} value={number} type="number" />
      <span>Total: {sum}</span>
    </div>
  );
}

export default UseMemo;