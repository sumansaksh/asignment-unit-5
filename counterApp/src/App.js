import "./styles.css";
// import React, { useEffect, useState } from "react";
import { useDebugValue, useState } from "react"
export default function App() {
  //const [count, setCount] = useState(10);
  //let count=0;
  const [count, setCount] = useState(0)
  
  const addOne = (value)=>{
    setCount(count+value)
  }

  const double = (value)=>{
    setCount(count*value)
  }
  return (
    <div className="App">
      <h3>counter:{count}</h3>
      <button onClick={()=>addOne(1)}>increment</button>
      <button onClick={()=>addOne(-1)}>decrement</button>
      <button onClick={()=>double(2)}>double</button>
      <button onClick={()=>double(0)}>Reset</button>
    </div>
  );
}
