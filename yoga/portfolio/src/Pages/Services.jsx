import React from 'react'
import ServicesCard from '../Compunents/ServicesCard'
import WhyWeChoose from '../Compunents/WhyWeChoose'
import '../Style/PagesStyle/Services.css'

const Services = () => {
  return (
    <div>
    <div className='w-[100%] text-center'>
      <h2 className='Our__services'>Our Services  </h2>
      <h1 className='our__area'>Our Services Area</h1>
     
    </div>
      <div>
      <ServicesCard/>
      </div>

     <WhyWeChoose/>

    </div>
  )
}

export default Services