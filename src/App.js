import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Intro from './Components/intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
