import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Popup from './components/Popup/Popup';

function App() {
  return (
    <div className="container-fluid main_parent_container">
    <div className="row main_parent_row">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/popup" element={<Popup />} />
      </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;
