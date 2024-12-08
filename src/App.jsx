import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';  // Import Contact component
import Footer from './components/Footer';
import './styles/global.css';
import './styles/heroSection.css';
import './styles/features.css';
import './styles/testimonials.css';
import './styles/pricing.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
      <Contact />
      <Pricing />
    </>
  );
}

export default App;
