import React, { useState } from "react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <div className="shadow">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={onDecrement}>
            Decrease
          </button>
          <button className="button" onClick={onIncrement}>
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
