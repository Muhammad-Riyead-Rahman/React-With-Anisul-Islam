import React, { useContext } from "react";
import { UserContext } from "./UserContext";


const Component4 = () => {
  const { user, text } = useContext(UserContext);
  const { id, name } = user;

  return (
    <div>
      <h2>{text}</h2>
      <h3>{id}</h3>
      <h3>{name}</h3>
    </div>
  );
};

export default Component4;
