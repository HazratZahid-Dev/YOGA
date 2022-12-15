import React, { useState } from 'react';
import '../src/Accordian.css';
import { FaChevronCircleDown,FaChevronCircleRight } from "react-icons/fa";


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title text-success" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className='bold'>{isActive ? < FaChevronCircleDown/> : <FaChevronCircleRight/>}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;