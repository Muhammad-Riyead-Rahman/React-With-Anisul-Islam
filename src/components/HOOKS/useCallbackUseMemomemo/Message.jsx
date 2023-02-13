import React, { memo, useMemo } from 'react';

const Message = ({numberOfMessage, messageHandleIncrement}) => {
  console.log("message rendering");

  const calculatedNumber = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 50000000; index++) {
      number++;
    }
    return number;
  }, []);
  
  return (
    <div>
      <h1>Calculated Number: { calculatedNumber }</h1>
      <h1>send {numberOfMessage} messages</h1>
      <button onClick={messageHandleIncrement}>Increment parrent count from child</button>
    </div>
  )
}

export default memo(Message);