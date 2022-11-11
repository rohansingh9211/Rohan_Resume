import React from 'react'
import image from "../Image/Rohan.jpeg"
import "./About.css"
import Typewriter from 'typewriter-effect';
import { BiFontFamily } from 'react-icons/bi';
const About = () => {
  return (
    <>
  
      <div className='AboutContaineer'>
      <div className='pictureLeft'> 
      <img src={image} alt="Rohan" />
      </div>
      <div className="pictureRight">
          <strong >MY NAME IS </strong>
        <h1>ROHAN SINGH</h1> 
        <span style={{color:"yellow",fontSize:"21px",fontFamily:"cursive",fontWeight:"lighter"}}> 
        <span style={{color:"black" ,fontSize:"2rem"}}>I am ,</span>
        <Typewriter 
               options={{
               strings: [ 'STUDENT','FRESHER',
                ' DEVELOPER',
              ],
             autoStart: true,
             loop: true,
             }}/>  
       </span>
      </div>
    </div>
    <div className='AboutUs'>
      <span style={{color:"yellow",fontSize:"21px",fontFamily:"cursive",fontWeight:"lighter"}}> 
        <Typewriter 
               options={{
               strings: ['I AM PERSUING B.TECH',
                ' FROM ORIENTAL INSTITUTE OF SCIENCE AND TECHNOLOGY',
               ' IN IT BRANCH',
               'FRONT-END WEB DEVELOPER',
               ' PROBLEM SOLVING SKILL IN ',
                ' COMPETITIVE PROGRAMMER'],
             autoStart: true,
             loop: true,
             }}/>  
        </span>
        <h1>SKILL</h1>
        <span style={{color:"yellow",fontSize:"21px",fontFamily:"cursive",fontWeight:"lighter"}}> 
        <Typewriter 
               options={{
               strings: [ 'REACT FRAMEWORK','C/C++',
                ' HTML/CSS/JAVASCRIPT',
               ' JAVA',
               'FRONT-END WEB DEVELOPNMENT',
               ' GIT',
                ' COMPETITIVE PROGRAMMING'],
             autoStart: true,
             loop: true,
             }}/>  
        </span>
        <p>Motivated and diligent individual with a sound foundation in programming, web developnment and DBMS. Proficient in C, C++, java . I intrested in web developnment (MERN). An active member of a non-profit organisation that provides veterinary care and shelter to animals.</p>
      </div>
        
    </>
  )
}

export default About