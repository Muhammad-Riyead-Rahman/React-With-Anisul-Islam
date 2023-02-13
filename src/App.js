import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar/navbar';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;