import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState();
  console.log(searchParams.get("id"));

  /* param setter function */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({name: name})
  }

  return (
    <div>
      <h1>User</h1>

      {/* setting params */}
      <form onSubmit={ handleSubmit }>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Find User</button>
      </form>

      {/* finding search params */}
      <p>{searchParams.get("id")}</p>
      <p>{searchParams.get("age")}</p>
      <p>{searchParams.get("name")}</p>
    </div>
  )
}

export default User