import React, { useState } from 'react'
import { useFormik } from 'formik'


const Signup = () => {
  //without formik
  /* const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */

  //without formik
  /* const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  } */

  //without formik
  /* const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password
    }
    console.log(newUser);
  } */

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    }
  })
  
  return (
    <div>
      <h2>User Signup</h2>

      {/* without formik */}
      {/* <form action="" onSubmit={handleSubmit}> */}

      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>

          {/* without formik */}
          {/* <input type="text" id="name" name="name" onChange={handleNameChange} value={name} /> */}

          <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
        </div>

        <div>
          <label htmlFor="email">Email: </label>

          {/* without formik */}
          {/* <input type="email" id="email" name="email" onChange={handleEmailChange} value={email} /> */}

          <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
        </div>

        <div>
          <label htmlFor="password">Password: </label>

          {/* without Formik */}
          {/* <input type="password" id="password" name="password" onChange={handlePasswordChange} value={password} /> */}

          <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup;