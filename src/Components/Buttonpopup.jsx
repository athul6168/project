import React from 'react'
import '../Components/Buttonpopup.css'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Buttonpopup = () => {
  return (
    <div className='burg'>
        <div> <img className='logo' src='/OOjs_UI_icon_userAvatar.svg.png' alt=''></img></div>
        <div><NavLink to='/' className='link1'style={({isActive})=>({color:isActive ?'orange':'black'})}>Home</NavLink></div>
        <div> <NavLink to='/Room' className='link1'style={({isActive})=>({color:isActive ?'orange':'black'})}>Room</NavLink></div>
        <div><NavLink to='/Booking' className='link1'style={({isActive})=>({color:isActive ?'orange':'black'})}>Booking</NavLink></div>
        

    </div>
  )
}

export default Buttonpopup