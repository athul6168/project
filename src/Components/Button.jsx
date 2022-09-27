import React from 'react'

const Button = ({color,back,text,padding,widt,hi,functionality,className}) => {
  return (
    <button className={className} style={{color:color,backgroundColor:back,padding:padding,width:widt,height:hi}}onClick={functionality}>
        {text}
    </button>
  )
}

export default Button