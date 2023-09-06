import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import {motion, spring} from 'framer-motion'



const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
       <span>Work for all these</span>
       <span>Brand & Clients</span>
       <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
         nisi enim non minus,recusandae minus, 
         <br/>recusandae nesciunt? Officiis!
         <br/>recusandae nesciunt?minus,recusandae minus Officiis! minus
         <br/>recusandae,recusandae minus Officiis!
         <br/>recusandae nesciunt?minus,recusandae minus Officiis!
         </span>
         <button className="button s-button"> Download CV</button>
         <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
        initial= {{ rotate: 45}}
        whileInView= {{ rotate: 0}}
        viewport= {{ margin: '-40px'}}
        transition= {{duration: 3.5, type: 'spring'}}
        
        className="w-main-circle">
         <div className="w-sec-circle">
            <img src={Upwork} alt=""/>
         </div>
         <div className="w-sec-circle">
            <img src={Fiverr} alt=""/>
         </div>
         <div className="w-sec-circle">
            <img src={Amazon} alt=""/>
         </div>
         <div className="w-sec-circle">
            <img src={Shopify} alt=""/>
         </div>
         <div className="w-sec-circle">
            <img src={Facebook} alt=""/>
         </div>
        </motion.div>

        <div className="w-back-circle blue-circle"></div>
        <div className="w-back-circle yellow-circle"></div>

      </div>
    </div>
  )
}

export default Works