import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // increase handler
  const handleIncrease = () => setCount(count + 1);

  // decrease handler
  const handleDecrease = () => setCount(count - 1);

  // reset handler
    const handleReset = () => setCount(0);

    // btn fontSize
    const fontSize = {
        fontSize:'2rem'
    }

  return (
    <div className="container">
      <span className="display-1"> {count}</span>

      <div className="btn-container d-flex gap-1 mt-3">
        <button className="increase" onClick={handleIncrease} style={fontSize}>
          Increase
        </button>
        <button className="increase" onClick={handleReset} style={fontSize}>
          Reset
        </button>
        <button className="increase" onClick={handleDecrease} style={fontSize}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Counter;
