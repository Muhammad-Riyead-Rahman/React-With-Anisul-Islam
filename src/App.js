import React, { useCallback, useState } from 'react';
import Message from './components/HOOKS/useCallbackUseMemomemo/Message';

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log("app rendering");

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count])

  return (
    <div>
      {toggle ? "on" : "off"}

      <button onClick={() => {
        setToggle(!toggle);
      }}>Toggle</button>

      <h1>Count: {count}</h1>

      <button onClick={() => {
        setCount((prevCount) => prevCount + 1)
      }}>Increment</button>

      <Message numberOfMessage={0} messageHandleIncrement={handleIncrement} />
    </div>
  )
}

export default App;



