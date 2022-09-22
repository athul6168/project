import React, { useState } from 'react'
import Newbookingform from './Newbookingform'
import Button from './Button'
import '../Components/Newbooking.css'
import { useNavigate } from 'react-router-dom'


const Newboking = ({setadroom}) => {
    const [lastname, setlastname] = useState('')
    const [firstname, setfirstname] = useState('')
    const [indate,setindate]=useState('')
    const [outdate,setoutdate]=useState('')
    const [adult,setadult]=useState('')
    const [child,setchild]=useState('')
    const [Available,setAvailable]=useState(false)
    const [Book,setBook]=useState(false)
    const navigate =useNavigate()


    const senddata=(e)=>{
        e.preventDefault()
        console.log(lastname,firstname,indate,outdate,adult,child);
    }
    function Backclick(){
      navigate(-1);
    }

function Availablefn(){
  setAvailable(!Available)
  console.log(Available);
  setBook(false)
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
            <div className='savee'>
        <Button color='white' text='GET AVALIBLE ROM'back='#d7ae63' padding="5px"widt= '102px'functionality={Availablefn}/> 
        { Available &&
            <div>
               <Button color='#d7ae63' text='BOOK ROOM'back='rgb(196,196,196)' padding="5px"widt= '102px'functionality={()=>{setBook(!Book)}}/> 
               <Button color='#d7ae63' text='BACK'back='rgb(196,196,196)' padding="5px"widt= '102px'functionality={Backclick}/> </div>}
        
       
        
</div>
        
          {Book &&<div className='finalbt'>
       <Button color='#d7ae63' text='checkin'back='rgb(196,196,196)' padding="5px"widt= '102px'/>
       <Button color='#d7ae63' text='checkout'back='rgb(196,196,196)' padding="5px"widt= '102px'/>
        <Button color='#d7ae63' text='cancel'back='rgb(196,196,196)' padding="5px"widt= '102px'/>   
        </div>}

        
        
            
        </div>
        </form>

    </div>
  )
}

export default Newboking