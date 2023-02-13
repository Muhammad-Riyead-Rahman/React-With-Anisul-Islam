import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar/navbar';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogView from './pages/BlogView';
import User from './User';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<BlogView />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;