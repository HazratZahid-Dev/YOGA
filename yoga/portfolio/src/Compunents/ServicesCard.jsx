import React from 'react'
import ServicesData from '../Config/ServicesData'

const ServicesCard = () => {
  return (
    <div className='w-auto p-4 gap-10 justify-center flex flex-wrap    m-auto '>
    {ServicesData.map((it) =>(
        <div >
        <div className='  w-[250px] h-auto border  '>
            <div className='border-b-4 border-black border-l-gray-500 '>
                <img src={it.images} alt='error' className='w-[250px] h-[280px] rounded-none'></img>
                <div className='p-4'>
                    <h2 className='font-bold text-center' >{it.header}</h2>
                    <p className='text-bold p-0 text-gray-600 text-center mt-2'>{it.para}</p>
                    <div className='flex justify-center mb-5'>
                        <button className=' bg-pink-700 mt-3 px-2 py-1 text-white rounded-sm'>View Detail</button>
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

export default ServicesCard