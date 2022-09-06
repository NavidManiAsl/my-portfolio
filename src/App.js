import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Technologies from './Pages/Technologies';
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import NoPage from './Pages/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'






function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
        <Route path="home"  element={<Home />} />
        <Route path="/"  element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
