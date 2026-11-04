



import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Reviews from './Pages/Reviews';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;


