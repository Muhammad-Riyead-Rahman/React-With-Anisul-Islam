import React from 'react'
import { NavLink } from 'react-router-dom'
const navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
    </nav>
  )
}

export default navbar