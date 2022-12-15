import React from 'react'
 import PopularCard from '../Compunents/PopularCard'
 import { FaGooglePlay } from "react-icons/fa";
import '../Style/Popular.css'

const Popular = () => {
  return (
    <>
        <div className='Popular__heading'>
            <h3 className='upper__heading'>See Popular Events</h3>
            <h1 className='upcoming'>Upcoming Events</h1>
            
        </div>
        <div>
            <PopularCard/>
           
        </div>
        <div>
          <div className='video__section '>

            <h1 className='video__header '>Watch Our Latest Yoga Club Video</h1>
            <p className='video__para'>It is long established fact that a reader will be directed by the 
            readable content of the page when looking its layout</p>
            <button type='button' className='play__btn'> <FaGooglePlay className=''/></button>
          </div>
        
         
        </div>

    
    </>
  )
}

export default Popular