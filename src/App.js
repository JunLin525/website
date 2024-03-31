import './App.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Accounting from './pages/Services/Accounting';
import Company from './pages/Services/Company';
import CoSec from './pages/Services/CoSec';
import PostInc from './pages/Services/PostInc';
import HomeZH from './pages-zh/Home-zh';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About-us" element={<About />} />
      <Route path="/FAQs" element={<FAQ/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Contact-us" element={<Contact/>}/>
      <Route path="/Company-Incorporation-Services" element={<Company/>}/>
      <Route path="/Post-Incorporation-Support-Services" element={<PostInc/>}/>
      <Route path="/Corporate-Secretary" element={<CoSec/>}/>
      <Route path="/Accouting-Auditing-Tax-Filing" element={<Accounting/>}/>
      <Route path="/Home-zh" element={<HomeZH/>}/>
      <Route path="/About-us-zh" element={<HomeZH/>}/>
      <Route path="/FAQs-zh" element={<HomeZH/>}/>
      <Route path="/Contact-us-zh" element={<HomeZH/>}/>
      <Route path="/Home-zh" element={<HomeZH/>}/>
      <Route path="/Services-zh" element={<HomeZH/>}/>

      </Routes>
    </Router>

    
  );
}

export default App;
