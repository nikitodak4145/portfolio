import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';
import { initReveal } from './utils/reveal';

function App() {
  return (
    <BrowserRouter>Compiled with problems:
    ×
    ERROR
    [eslint] 
    src\App.js
      Line 14:45:  'Projects' is not defined  react/jsx-no-undef
    
    Search for the keywords to learn m
      <Navbar />
      <div style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;