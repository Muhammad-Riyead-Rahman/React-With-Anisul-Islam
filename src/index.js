// import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "font-awesome/css/font-awesome.min.css";

/* const todoTitte = "Call Family";
const todoDesc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card() {
  return (
    <div className='card'>
      <h3 className='cardTitle'>{todoTitte}</h3>
      <p className='cardDesc'>{todoDesc}</p>
      <p className='cardFooter'>
        {dateName + "/" + monthName + "/" + currentYear}
      </p>
    </div>
  );
} */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
