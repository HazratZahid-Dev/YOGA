import React from 'react'
import TeamData from '../Config/TeamData'
import '../compunentsStyle/Cards.css'
import { FaPhoneAlt,FaRegEnvelope } from "react-icons/fa";
const TeamCard = () => {
    return (
        <div className='w-auto p-4 gap-10 justify-center flex flex-wrap    m-auto'>
            {TeamData.map((it) =>(
                <div>
                <div className='  w-[250px] h-auto '>
                    <div className=' '>
                        <img src={it.images} alt='error' className='w-[250px] h-[250px] rounded-none'></img>
                        <div className='p-4'>
                            <h2 className='font-bold' >{it.header}</h2>
                            <p className='text-bold p-0 text-gray-600'>{it.para}</p>
                            <div className=' justify-center mt-4'>
                            <p className='flex gap-1'><FaPhoneAlt className='text-sm mt-2 text-pink-600'/>{it.phone}</p>
                            <p className='flex gap-2 '><FaRegEnvelope className='text-sm mt-2 text-pink-600'/>{it.email}</p>
                            
                            </div>

                        </div>
                       
                        
                       
                    </div>
                </div>
                   



                </div>
            ))

            }

        </div>
    )
}

export default TeamCard