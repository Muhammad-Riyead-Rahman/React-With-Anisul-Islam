import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // calls with first render and depened on count
    console.log("useEffect");
  }, [count]);

  return (
    <div>
      {console.log("rednering")}
      <h1>Count: {count} </h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setIsLoading(!isLoading);
        }}
      >
        isLoading
      </button>
    </div>
  );
};

export default UseEffectExample;