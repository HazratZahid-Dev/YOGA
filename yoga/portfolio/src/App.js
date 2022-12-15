// import React, { useState } from 'react';

import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import PortNavbar from './Compunents/PortNavbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
// import Services from './Pages/Services';
import Skill from './Pages/Skill';
import Process from './Pages/Process';
import MainServices from './Pages/MainServices';
import TopNav from './Compunents/TopNav';
function App() {

  return (
    <>
  
      <Router>
     
        <div>
         <TopNav/>
          <PortNavbar />
          <Routes>
            
            <Route path='/' element={<Home  />} />
     
            <Route path='/About' element={<About/>} />
        
            <Route path='/Portfolio' element={<Portfolio/>} />
        
            <Route path='/MainServices' element={<MainServices/>} />
          
          <Route path="/Skill" element={<Skill/>} />
          <Route path="/Process" element={<Process/>} />
       
      
          </Routes>
        </div>
      </Router>
     
      
      
 
    </>

  );
}


export default App;
