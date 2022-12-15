import React from 'react'
import {FaSun,FaUser} from "react-icons/fa";
import '../Style/PagesStyle/Form.css'

import { BsFillSuitHeartFill,BsBriefcaseFill } from "react-icons/bs";
const IconSection = () => {
  return (
    <>
    <div className='icons__section'>
        <div className='p-5'>
        <div className='text-center justify-center'>
        <FaSun className='icons'/>
            <h4 className='icons__text'>29</h4>
            <h1 className='icons__heading'>Award won</h1>
       
        </div>
      
      
        
            
        </div>
        <div className='p-5'>
        <div className='text-center justify-center'>
            <BsFillSuitHeartFill className='icons'/>
            <h1 className='icons__text'>30</h1>
            <h3 className='icons__heading' >Happy Customer</h3>
        </div>
            
            
            
        </div>
        <div className='p-5'>
        <div className='text-center justify-center'>
            <h1><FaUser className='icons'/></h1>
            <h1 className='icons__text'>9</h1>
            <h3 className='icons__heading'>Qualified Trainer</h3>
        </div>
           
            
           
        
        </div>
        <div className='p-5'>
        <div className='text-center justify-center'>
             <BsBriefcaseFill className='icons'/>
            <h1 className='icons__text'>12</h1>
            <h3 className='icons__heading'>Amazing Classes</h3>
        </div>
           
           
           
            
        </div>
    </div>

    </>
  )
}

export default IconSection