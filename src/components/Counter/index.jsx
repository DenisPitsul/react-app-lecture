import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function decrement() {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button> <span>{count}</span>{" "}
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
