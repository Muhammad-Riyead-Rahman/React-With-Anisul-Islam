import React from 'react';
import ReactDOM from 'react-dom/client';

const todoTitte = "Call Family";
const todoDesc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Todo App</h1>
    <h3>{todoTitte}</h3>
    <p>{todoDesc}</p>
    <p>{dateName + "/" + monthName + "/" + currentYear}</p>
  </div>
);