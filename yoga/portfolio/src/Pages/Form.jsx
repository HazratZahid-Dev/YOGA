import React from 'react'
import '../Style/PagesStyle/Form.css'

const Form = () => {
  return (
    <div>
        <div className='main__form flex '>
        <div className='inner__form__div'>
            
            <div className='book'>
            <h1 className=''>Book an appointement</h1>
            <div className='book__underLine'></div>
            
           
                <div className='mt-3 '>
              
               <input type='text' placeholder='Name*' className='p-1 inputFeild'></input> 
                <input type='text' placeholder='Email*' className='ml-3 p-1 inputFeild'></input>
             
                <br/>
                <input type='text' placeholder='Phone*' className='p-1 inputFeild'></input>
                <select type='select' placeholder='Stress' className='ml-3 mt-3 p-1 inputFeild'>
                    <option>Stress</option>
                    <option>Anxiety</option>
                    <option>Depression</option>
                </select>
                <br/>
                <textarea  className='text-aria ' placeholder='Message' ></textarea>

                </div>
                <button type='button' className='bg-pink-600 form__btn'>Send Request</button>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Form