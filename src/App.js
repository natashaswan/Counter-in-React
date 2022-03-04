import './App.css';
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="counter-container">
      <header className="App-header">     
      <h1> Counter </h1>   
      <p> {count} </p>
      <div>
        <button onClick={ incrementCount }>press me to increment</button>
        <button onClick={ decrementCount }>press me to decrement</button>
      </div>       
      </header>
    </div>
  );
}

export default App;
