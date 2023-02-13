import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const User = () => {
  
  const [searchParams, setSeachParams] = useSearchParams();
  console.log(searchParams.get("id"));

  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeachParams({ id: id, age: age, name: name });
  }
  return (
    <div>
      <h1>User</h1>
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="id" value={id} onChange={(e) => {
          setId(e.target.value)
        }} />

        <input type="text" placeholder="age" value={age} onChange={(e) => {
          setAge(e.target.value)
        }} />

        <input type="text" placeholder="name" value={name} onChange={(e) => {
          setName(e.target.value)
        }} />


        <button type="submit">Find User</button>
      </form>
      <h1>id: { searchParams.get("id") }</h1>
      <h1>age: { searchParams.get("age") }</h1>
      <h1>name: { searchParams.get("name") }</h1>
    </div>
  )
}

export default User