import React from 'react'


const Newbookingform = ({title,type,setstate}) => {
  return (
   
        <div className='input'>
       <div> 
       <div> <label >{title}</label></div>
        <input type={type}onChange={(e)=>{setstate(e.target.value)}} required/>
        </div>
    </div>
  )
}

export default Newbookingform