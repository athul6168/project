import { type } from '@testing-library/user-event/dist/type'
import React from 'react' 
import '../Components/input.css'


const Input = ({title,setstate,type,value}) => {
  return (
    <div className='input'>
       <div> 
        <label >{title}</label>
        </div>
        <input value={value} type={type}onChange={(e)=>{setstate(e.target.value)}} required/>
        
        
        

    </div>
    
  )
}

export default Input