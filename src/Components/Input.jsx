import { type } from '@testing-library/user-event/dist/type'
import React from 'react' 
import '../Components/input.css'


const Input = ({title,setstate,type}) => {
  return (
    <div className='input'>
       <div> 
        <label >{title}</label>
        </div>
        <input type={type}onChange={(e)=>{setstate(e.target.value)}} required/>
        
        
        

    </div>
    
  )
}

export default Input