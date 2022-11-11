import React,{useState} from 'react'
import "./Navbar.css"
import Currstate from '../Currstate/Currstate';
import * as AiIcons from "react-icons/ai";
import Typewriter from 'typewriter-effect';
import SideBardata from '../Sidebardata/SideBardata';
const Navbar = () => {
    const [open,setOpen]=useState(false);
  const sidebarShow=()=>setOpen(!open);
  return (
    <div className="Navbar"> 
    <div className="NavbarTwo">
        <div className="NavbarLeft">
        {
         (open)?(
           <span>
         <AiIcons.AiOutlineClose color='black' size="2rem" onClick={sidebarShow}/>
        <SideBardata/>
        </span>
        )
         :(
         <AiIcons.AiOutlineMenu color='black' size="2rem" id="Icons" onClick={sidebarShow}/>)
         }
        </div>
        <div className="NavbarCenter">
        <span> <Typewriter 
               options={{
               strings: [ 
                ' SKILL',
               ' WEB',
               'DEVELOPER',
               ' PROGRAMMER',],
             autoStart: true,
             loop: true,
             }}/></span>            
        </div>
        <div className='NavbarRight'><button><Currstate/></button></div>
        </div>
    </div>
  )
}

export default Navbar