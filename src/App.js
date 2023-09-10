import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the import changes

import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Route */}
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App;
