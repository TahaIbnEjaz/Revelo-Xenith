import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import whatsapp from './assets/whatsapp.avif';

// App is intentionally thin: it wires up the persistent Navbar/Footer
// and hands off page content to route components. No section markup
// or business logic should live here.
function App() {
  const [waVisible, setWaVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setWaVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-moving animate-gradient-move">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <a
        href="https://wa.me/923263321658?text=Hello%20Revelo%20Xenith!"
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-float ${waVisible ? 'whatsapp-float--visible' : ''}`}
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-float__inner">
          <img src={whatsapp} alt="WhatsApp" className="whatsapp-float__img" />
        </span>
      </a>

      <Footer />
    </div>
  );
}

export default App;
