import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'

const Intro = () => {
    const transition = {duration : 2, type: 'spring'}
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I am</span>
                <span>Narender Mahor</span>
                <span>I am a MERN Stack Developer with the high level of development skills, producting the Quality work</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icon">
                <a href="https://github.com/frinkins-Narender" target="_blank" rel="noreferrer">
                <img src={Github} alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/narender-mahor-a48ab5241/" target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt=""/>
                </a>
                <a href="https://www.instagram.com/__frinkins/" target="_blank" rel="noreferrer">
                <img src={Instagram} alt=""/>
                </a>
             
            </div>
        </div>
        <div className="i-right">
        <img src={Vector1} alt=""/>
        <img src={Vector2} alt=""/>
        <img src={boy} alt=""/>
        <motion.img
        initial={{left: '-65%'}}
        whileInView= {{left: '-15%'}}
        transition={transition}
        src={glassesimoji} alt=""/>

        <motion.div
        initial={{top: '-4%', left: '74%'}}
        whileInView= {{left: '68%'}}
        transition={transition}
        
        style={{top: "-4%", left: "68%"}}
        className="floating-div"
        >
        <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
        </motion.div>
        <motion.div
        initial={{top: '18rem', left: '9rem'}}
        whileInView= {{left: '0rem'}}
        transition={transition}
        
        style={{top: "18rem", left: "0rem"}}
        className="floating-div"
        >
        <FloatingDiv image={thumbup} txt1="MERN Stack" txt2="Developer"/>
        </motion.div>
        <div className="blur" style={{background: "rgb(238 210 255)"}}>
        </div>
        <div className="blur" style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem"
            }}>

            </div>
        </div>
    </div>
  )
}

export default Intro