import React from 'react';

/* simple function creation scenario */
function Todo() {
  return (
    <div>
      <p>Todo title</p>
      <p>Todo desc</p>
    </div>
  )
}

/* creating react function under the hood */

//first scenario
function Welcome1() {
  return <h1>This is welcome 1</h1>
}

//secend scenario
/* creating react function under the hood */
function Welcome2() {
  return React.createElement("h1", {}, "This is welcome2");
}

//third scenario
function Todo1() {
  return (
    <div>
      <p>Todo Title1</p>
      <p>Todo Description1</p>
    </div>
  )
}

//fourth scenario
/* creating react function under the hood */
function Todo2 () {
  return React.createElement("div", {}, React.createElement("p", {}, "Todo Title2"),
    React.createElement("p", {}, "Todo Description2"))
}

export default function App() {
  return (
    <div>
      <Welcome1 />
      <Welcome2 />
      <Todo1 />
      <Todo2 />
    </div>
  )
}



