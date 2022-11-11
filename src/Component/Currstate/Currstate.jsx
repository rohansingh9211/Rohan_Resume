import {useState,useEffect} from 'react'
import "./Currstate.css"
import * as AiIcon from "react-icons/ai";
import * as BiIcon from "react-icons/bi";
const Currstate = () => {
  const[cState,setState]=useState(false);
  const popUp=()=>{
    setState(true);
  }
  const popDown=()=>{
    setState(false)
  }

  var show =new Date();
  var displayDate=show.getDate()+'/'+show.getMonth()+'/'+show.getFullYear();
  var current=new Date();
  const time = current.toLocaleTimeString("en-US"); 
  const [cTime, setTime] = useState(time);
  useEffect(() => {
    setTimeout(() => {
      setTime(time);
    }, 1000);
  });

  return (
    <>
    <div className='currState'>
      <div className="currStateTwo">
     <button id="states" onClick={popUp}><BiIcon.BiMap color='black' /> Current Status</button></div>
    {(cState==true)?(
     <div className="popButton">
       <AiIcon.AiFillCalendar icon="fa-solid fa-coffee" size="2rem"/>
       <span>{displayDate}</span>
       <br/>
       <AiIcon.AiFillClockCircle icon="fa-solid fa-coffee" size="2rem"/> 
       <span>{cTime}</span>
       <br/>
       <button id="Close" onClick={popDown} style={{float:"center"}}>CLOSE</button>
     </div>)
     :(
       "")
     }
    </div>
    </>
  )
}

export default Currstate
