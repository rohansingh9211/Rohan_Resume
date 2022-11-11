import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBardata.css"
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs"
const SideBardata = () => {
  return (
    <>
    <div className='Header'>
            <ul className='menu'>
                <li>
                    <Link to="/qualification"><BsIcons.BsFillFileEarmarkSpreadsheetFill/> &nbsp; QUALIFICATION</Link>
                </li>
                <li>
                    <Link to="/resume"><RiIcons.RiFilePaper2Line/>&nbsp; RESUME</Link>
                </li>
                <li>
                    <Link to="/contact"><AiIcons.AiOutlineMail/> &nbsp; CONTACT ME</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default SideBardata