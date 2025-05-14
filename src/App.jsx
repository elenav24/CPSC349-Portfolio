import { useState } from 'react';
import './App.css';
import './index.css';
import { StylizedLoadingBar } from './components/LoadingScreen';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Home } from './components/sections/Home';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <section className="loading">
          <StylizedLoadingBar onComplete={() => setIsLoaded(true)} />
        </section>
      ) : (
        <div className="portfolio">
          <div className="navbar">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;