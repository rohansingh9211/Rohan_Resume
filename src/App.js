import React from 'react'
import FrontPage from './Component/Frontpage/FrontPage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from  "./Component/pages/Contactus/Contact";
import Resume from  "./Component/pages/QualandResume/Resume";
import Qualification from  "./Component/pages/QualandResume/Qualification";
const App = () => {
  return (
    <>
    { <Router>
      <Routes>
        <Route path='/' exact element={<FrontPage/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/qualification' element={<Qualification/>}></Route>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </Router> }
    </>
   
  )
}

export default App