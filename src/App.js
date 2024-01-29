import logo from './logo.svg';
import './App.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About-us" element={<About />} />
      <Route path="/FAQs" element={<FAQ/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Contact-us" element={<Contact/>}/>
      </Routes>
    </Router>

    
  );
}

export default App;
