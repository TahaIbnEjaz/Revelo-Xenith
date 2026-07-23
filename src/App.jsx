import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// App is intentionally thin: it wires up the persistent Navbar/Footer
// and hands off page content to route components. About, Capabilities,
// and Process live as anchor sections inside Home rather than separate
// routes — Work and Contact are the only other top-level pages.
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-moving animate-gradient-move">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
