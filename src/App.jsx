import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Index.jsx';       
import AboutUs from './pages/AboutUs/Index.jsx';   
import Blog from './pages/Blog/Index.jsx';
import Contact from './pages/Contact/Index.jsx';
import AppAbout from './pages/AppAbout/Index.jsx';
import Marketplace from './pages/Marketplace/Index.jsx';
import Products from './pages/Products/index.jsx';
import Services from './pages/Services/index.jsx';


function App () {
 
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} /> 
        
        <Route path="/about" element={<AboutUs />} />
        
        <Route path="/blog" element={<Blog />} />
        
        <Route path="/contact" element={<Contact />} />

        <Route path="/app-about" element={<AppAbout />} />

        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/products" element={<Products />} />

        <Route path="/services" element={<Services />} />

        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;