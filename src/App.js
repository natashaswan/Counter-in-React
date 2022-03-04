import './App.css';
import React, { useState } from "react";
import Readmore from "./components/Readmore";

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
      <div className='readmore-container'>
          <Readmore 
          text = {`Focused, hard work is the real key
          to success. Keep your eyes on the goal, 
          and just keep taking the next step 
          towards completing it.`}
          maxLength = {21}
          />
      </div>
     
    </div>
    
  );
}

export default App;
