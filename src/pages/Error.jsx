import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 not found</h1>
      <button onClick={() => {
        navigate("/")
      }}>Go To Home Page</button>
    </div>

  )
}

export default Error