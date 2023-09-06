import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from '../../Resume/Narender.pdf'
import {motion, spring} from 'framer-motion'

const Services = () => {
  const transition = {duration: 1, type: spring}
  return (
    <div className="services" id="services">

      {/* left side */}
      <div className="awesome">
       <span>My Awesome</span>
       <span>services</span>
       <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
         nisi enim non minus,recusandae minus, <br/>recusandae nesciunt? Officiis!</span>
         <a href={Resume} download>
         <button className="button s-button"> Download CV</button>
         </a>
         <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
        initial={{left: '25%'}}
        whileInView= {{left: '14rem'}}
        transition={transition}
        
        style={{left: "14rem"}}>
          <Card emoji={HeartEmoji} heading={"Design"} details={"Figma, Photoshop lorem lipsum, Photoshop lorem lipsum"}/>
        </motion.div>
        <motion.div
        initial={{top: '12rem',left: '15rem'}}
        whileInView= {{left: '-4rem'}}
        transition={transition}
        
        
        style={{top: "12rem", left: "-4rem"}}>
          <Card emoji={Glasses} heading={"Developer"} details={"Html, Css, JavaScript, React Js, Node Js, Express Js, MongoDB"}/>
        </motion.div>
        <motion.div
        initial={{top: '-15rem',left: '12rem'}}
        whileInView= {{top: '19rem'}}
        transition={transition}
        
        style={{top: "19rem", left: "12rem"}}>
          <Card emoji={Humble} heading={"UI/UX"} details={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
        </motion.div>
        <div className="blur s-blur-2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services

