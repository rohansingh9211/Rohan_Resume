import React from 'react'
import { Link } from 'react-router-dom';
import Biodata from "../../Image/resume.jpeg";
import "./Qualification.css";
const Resume = () => {
  return (
      <>
      <div className='resume'>
          <h1>HERE IS MY RESUME IF IS FULLFILL YOUR NEEDS THAN PLEASE CONTACT ME !</h1>
          <div className='resumeImg'>
          <img src={Biodata} alt='error'></img>
          <Link to="/" className='link'>BACK</Link>
          </div>
      </div>
      </>
   
  )
}

export default Resume