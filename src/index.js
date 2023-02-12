import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
// if create style sheet into src folder, must import it before use
// & create style sheet into public folder, just call it by className
// no need to import

const todoTitte = "Call Family";
const todoDesc = "This is todo description";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className='headingStyle largeText'>Todo App</h1>
    <h3>{todoTitte}</h3>
    <p>{todoDesc}</p>
    <p>{dateName + "/" + monthName + "/" + currentYear}</p>
  </div>
);
