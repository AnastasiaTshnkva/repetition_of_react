import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementFunc = () => setCounter(counter + 1);
  const decrementFunc = () => setCounter(counter - 1);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementFunc}>increment</button>
      <button onClick={decrementFunc}>decrement</button>
    </div>
  )
}

export default Counter;