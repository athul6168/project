import React, { useState } from 'react'
import Newbookingform from './Newbookingform'
import Button from './Button'
import '../Components/Newbooking.css'


const Newboking = ({setadroom}) => {
    const [lastname, setlastname] = useState('')
    const [firstname, setfirstname] = useState('')
    const [indate,setindate]=useState('')
    const [outdate,setoutdate]=useState('')
    const [adult,setadult]=useState('')
    const [child,setchild]=useState('')
    const senddata=(e)=>{
        e.preventDefault()
        console.log(lastname,firstname,indate,outdate,adult,child);
    }








  return (
    <div>
        <form action="" onSubmit={senddata}>
        <div className='bookingdata'>
            <div className='head'>New booking</div>
            <Newbookingform title='Guest last name'type='text'setstate={setlastname}/>
            <Newbookingform title='Guest first name'type='text'setstate={setfirstname}/>
            <Newbookingform title='check in date'type='text'setstate={setindate}/>
            <Newbookingform title='check out date'type='text'setstate={setoutdate}/>
            <Newbookingform title='No of adult'type='text'setstate={setadult}/>
            <Newbookingform title='No of child'type='text'setstate={setchild}/>
            <div className='save'>
        <Button color='white' text='GET AVALIBLE ROM'back='#d7ae63' padding="5px"widt= '102px'/>
            </div>
        </div>
        </form>

    </div>
  )
}

export default Newboking