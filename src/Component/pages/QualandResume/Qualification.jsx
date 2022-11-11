import React from 'react';
import "./Qualification.css";
import Typewriter from 'typewriter-effect';
const Qualification = () => {
  return (
   <>
   <div className='qual'>
     <div className='qualFirst'>
       <h1>
         DIPLOMA: 
       </h1> 
       <strong>I COMPLETED MY DIPLOMA </strong>
       <span style={{color:"yellow",fontSize:"21px",fontFamily:"cursive",fontWeight:"lighter" ,width:"30rem"}}> 
       <Typewriter  id="type"
               options={{
               strings: ['IN 2020', 
                ' FROM S.V POLYTECHNIC BHOPAL ',
               ' FROM COMPUTER SCIENCE BRANCH',
               ],
             autoStart: true,
             loop: true,
             }}/></span>
       <a href='https://drive.google.com/file/d/1Xss8WpPoZRjrOFIlTVo6zLNamkGJGGYa/view?usp=sharing' target="_blank">VEIW DOCS</a>
     </div>
     <div className='qualSecond'>
       <h1>
         ENGINNERING:
       </h1>
       <strong>I PERSUING B.TECH</strong>
       <span style={{color:"yellow",fontSize:"21px",fontFamily:"cursive",fontWeight:"lighter",width:"30rem"}}> 
       <Typewriter id="type"
               options={{
               strings: [' FROM ORIENTAL INSTITUTE OF SCIENCE AND TECHNOLOGY', 
                ' IN INFORMATION TECHNOLOGY',
               ],
             autoStart: true,
             loop: true,
             }}/></span>
       <a href='https://drive.google.com/file/d/1WI3c7shfF2QUkAoPXU7vkb_6eF9ggwPG/view?usp=sharing' target="_blank">VEIW DOCS</a>
     </div>
   </div>
   </>
  )
}

export default Qualification