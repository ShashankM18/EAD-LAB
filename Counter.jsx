import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <header>
        <h1>Counter Application</h1>
      </header>
      <div className="countApp">
        <center>
          <button onClick={decrement}>Decrement</button>
          <span style={{ margin: "0 20px", fontSize: "20px" }}>{count}</span>
          <button onClick={increment}>Increment</button>
          <button onClick={reset} style={{ marginLeft: "20px" }}>Reset</button>
        </center>
      </div>
    </>
  );
}

export default App;
