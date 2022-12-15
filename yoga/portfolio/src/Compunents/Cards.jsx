import React from 'react'
import CardData from '../Config/CardData'
import {FaAngleRight} from 'react-icons/fa'
import '../compunentsStyle/Cards.css'

const Cards = () => {
    return (
        <div className='w-auto p-4 gap-10 justify-center flex flex-wrap    m-auto'>
            {CardData.map((it) =>(
                <div>
                <div className='  w-[300px] h-auto '>
                    <div className='border '>
                        <img src={it.images} alt='error' className='w-[300px] h-[300px] rounded-none'></img>
                        <div className='p-4 '>
                            <h2 className='Card__header sm:text-sm' >{it.header}</h2>
                            <p className='text-bold p-0 text-gray-600'>{it.para}</p>
                            <div className='flex justify-center mb-5'>
                                <button className='second__btn flex justify-center w-[37px] h-[37px] rounded-2xl absolute bg-pink-700 font-bold text-xl mt-4 '><FaAngleRight className='mt-2 text-white'/></button>
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

export default Cards