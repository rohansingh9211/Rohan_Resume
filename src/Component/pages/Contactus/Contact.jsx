import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
export const ContactUs = () => {
  const[userName,setUserName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
 
  const form = useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    var condition=false;
    var len1=userName.length;
    var len2=message.length;
    var keys=email.indexOf("@");
    console.log(condition);
    console.log(len1,len2,keys);
    console.log(condition);
    if(keys > 1 && len1 > 2  && len2 > 5){
      condition=true;
      console.log(condition);
    }
    if(condition===true)
    {
      emailjs.sendForm('service_3d9cwlq', 'template_5v0kdpp', form.current, 'j4Cj2xxnKtKwlbJ5n')
           .then((result) => {
             alert("succesfully");
               console.log(result.text);
               setUserName=("");setEmail=("");setMessage=("");
         }, (error) => {
               console.log(error.text);
          });
          
    }else{
      alert("Sorry you fill form incorrectly \n username must more than 2 char \n email is valid \n message must more than 5 char ");
    }
  }
  
  return (
    <><div className='contactMe'>
    <div className='contactUs'>
    <form ref={form} onSubmit={sendEmail}>
      <h3>CONTACT ME FOR HIRE ME !</h3>
      <div className='input1' id="input">
      <label>Name</label>
      <AiIcons.AiOutlineUser size={"25px"} color='white'/>
      <input type="text" name="user_name" placeholder='ENTER YOUR NAME' value={userName} onChange={(e)=>setUserName(e.target.value)} autoComplete='off'/>
      </div >
      <div className='input2' id="input">
      <label>Email</label>
      <AiIcons.AiOutlineMail size={"25px"} color='white'/>
      <input type="email" name="user_email"  placeholder='ENTER YOUR VAID MAIL ID' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off'></input>
      </div>
      <div className='input3'>
      <label>Message</label>
      <AiIcons.AiOutlineMessage size={"25px"} color='white'/>
      <textarea name="message" placeholder='Message' value={message}  onChange={(e)=>setMessage(e.target.value)} autoComplete='off'/>
      </div>
      <div className='input4'>
      <input type="submit" value="Send" className='btn btn-success' id="submit"/>
      </div>
      <div className='MailContact'>
      <div><a href="#"><SiIcons.SiGmail size={"30px"} color='white'/>  19rohansingh20@gmail.com</a></div>
      <div><a href='#'><BsIcons.BsTelephone size={"30px"} color='white'/>  8349222816</a></div>
      </div>
    </form>
    </div>
    </div>
    <div className='footer'> 
        <div></div>
        <a href='https://github.com/rohansingh9211' target="_blank"><AiIcons.AiFillGithub size={"30px"}/></a>
        <a href="https://www.linkedin.com/in/rohan-singh-9483b7220/" target="_blank"><AiIcons.AiFillLinkedin size={"30px"}/></a>
     </div>
    </>
  );
};
export default ContactUs