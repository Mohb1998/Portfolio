import React from 'react'
import './App.css';

import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Experience from "./components/Experience/Experience.jsx"
import Testimonials from "./components/Testimonials/Testimonials.jsx"
import Portfolio from "./components/Portfolio/Portfolio.jsx"
import Services from "./components/Services/Services.jsx"
import Nav from "./components/Nav/Nav.jsx"


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
