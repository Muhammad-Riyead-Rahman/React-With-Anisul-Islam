import React from 'react';
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const navigate = useNavigate();

  return (
      <div>
        <h1>Contact Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi harum, incidunt molestiae aliquam aspernatur porro adipisci necessitatibus? Enim, nulla.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi harum, incidunt molestiae aliquam aspernatur porro adipisci necessitatibus? Enim, nulla.</p>
      
      <button onClick={() => {navigate("/")}}>Go to home page</button>
    </div>
  )
}

export default Contact