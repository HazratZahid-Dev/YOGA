import React from 'react'
import TeamCard from '../Compunents/TeamCard'
import '../Style/PagesStyle/OurTeam.css'
// import TeamCard  from '../Config/TeamData'

const OurTeam = () => {
  return (
    <div>
    <div className='w-[100%]  text-center mt-9'>
        <h4 className='our__team'>Our Team</h4>
        <h1 className='team__member'>Meet The Team Member</h1>
    </div>
    <div className='mt-4'>
        <TeamCard/>
    </div>

    </div>
  )
}

export default OurTeam