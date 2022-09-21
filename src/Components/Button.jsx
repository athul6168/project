import React from 'react'

const Button = ({color,back,text,padding,widt,hi,functionality}) => {
  return (
    <button className='butn' style={{color:color,backgroundColor:back,padding:padding,width:widt,height:hi}}onClick={functionality}>
        {text}
    </button>
  )
}

export default Button