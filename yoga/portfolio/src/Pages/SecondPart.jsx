import React from 'react'
import Cards from '../Compunents/Cards'
import '../Style/PagesStyle/SecondPart.css'

const SecondPart = () => {
  return (
    <div>
        <div className='upper__text'>
            <h1 className='SecondPart__header'>Recharge Your Energy For a New Life</h1>
            <p className='secondPart__para'>It is long established fact that a reader will be directed by the readable content of a <br/> page when looking at its layout</p>
        </div>
        <Cards/>
    </div>
  )
}

export default SecondPart