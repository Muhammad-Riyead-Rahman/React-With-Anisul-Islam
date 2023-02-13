import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Protected from "./pages/Protected";
import User from './pages/User';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn ?
        <button onClick={() => {
          setIsLoggedIn(!isLoggedIn)
        }}>Log Out</button>
        :
        <button onClick={() => {
          setIsLoggedIn(!isLoggedIn)
        }}>Log in</button>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="/contact" element={<Protected isLoggedIn={isLoggedIn}>
          <Contact />
        </Protected>} />
        <Route path="*" element={<Error />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;