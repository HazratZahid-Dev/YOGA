import '../Style/PagesStyle/Home.css'
import React from 'react'
import SecondPart from './SecondPart'
import ThirdPart from './ThirdPart'
import Services from './Services'
import OurTeam from './OurTeam'
import Popular from './Popular'
import Testimonial from './Testimonial'
import Form from './Form'
import IconSection from './IconSection'
import News from './News'
import PartNer from './PartNer'
import Footer from '../Compunents/Footer'
import homeImg from '../images/y1.jpg'

const Home = () => {
  return (
    <div>
    <div className=''>

    <img src={homeImg} className='homeImg'></img>
     <div className=' div__text  '>
      <h1 className=' text__div '>LIFE IS BETTER WITH YOGA </h1>
      <p className='Home__para'>It is long established fact that a reader will be distracted by the readable content of the page<br/> when looking at its layout</p>
      <button type='button' className=' home__btn '>Get a Free For Registration</button>
    </div> 
  
  
    
     
    </div>
    <SecondPart/>
    <ThirdPart/>
    <Services/>
    <OurTeam/>
    <Popular/>
    <Testimonial/>
    <Form/>
    <IconSection/>
    <News/>
    <PartNer/>
    <Footer/>
    </div>
  )
}

export default Home