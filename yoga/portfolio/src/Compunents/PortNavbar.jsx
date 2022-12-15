import React, { useState } from "react";
import { FaTimes, FaBars,FaSearch } from "react-icons/fa";
import '../Style/PortNav.css'
import { Link } from "react-router-dom";


const NavBar = () => {
  const [icon, seticon] = useState(false);
  
  return (
    <div className="cloths-navbar justify-between ">
      <div>
      <div className="yoga__logo w-[60px] h-[60px]"></div>
       
      </div>
   
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
       
        <li><Link to="" onClick={() => seticon(!icon)}>Home</Link></li>
        <li><Link to="/About" onClick={() => seticon(!icon)}>AurApprouch</Link></li>
        <li><Link to="/Portfolio" onClick={() => seticon(!icon)}>  About</Link></li>
        <li><Link to="/MainServices" onClick={() => seticon(!icon)}>Services</Link></li>
      
        <li><Link to="/Skill" onClick={() => seticon(!icon)}> Why Choose US </Link></li>
        <li><Link to="/Process" onClick={() => seticon(!icon)}>Team</Link></li>
        <li><Link to="/Events" onClick={() => seticon(!icon)}>Events</Link></li>
        
      </ul>
     
  

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
     
    </div>
  );
};

export default NavBar;
