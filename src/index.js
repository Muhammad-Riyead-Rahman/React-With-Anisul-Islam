import React from 'react';
import ReactDOM from "react-dom/client";

import "./index.css";

const todoTitte = "Call Family";
const todoDesc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className='headingStyle largeText'>Todo App</h1>
    <div className='card'>
      <h3 className='cardTitle'>{todoTitte}</h3>
      <p className='cardDesc'>{todoDesc}</p>
      <p className='cardFooter'>
        {dateName + "/" + monthName + "/" + currentYear}
      </p>
    </div>
  </div>
);