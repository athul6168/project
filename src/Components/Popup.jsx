import React, { useState } from 'react'
import Input from './Input'
import '../Components/input.css'
import Button from './Button'
import Amenities from './Amenities'
const Popup =({setaddroom})=>{ 
const [roomno, setroomno] = useState('')
const [adultcapacity, setadultcapacity] = useState('')
const [childcapacity, setchildcapacity] = useState('')
const [price, setprice] = useState('')
const[Selectarray,setSelectarray]=useState([])
const senddata=(e)=>{
  e.preventDefault()
  console.log(roomno,adultcapacity,childcapacity,price);
  
}



        <div>
            <select onChange={(e)=>{setSelectarray([...setSelectarray.e.target.value])}}>
                <option>select</option>
                <option value="1">Telivision</option>
                <option value="2">Air Condition</option>
                <option value="3">Internet access</option>
            </select>
        </div>



  return (
    <div className='inputbox'>
        <div className='box-one'>Room 101
        <div className='cross'  onClick={()=>(setaddroom(false))}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='30px'><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H448C456.8 432 464 424.8 464 416V96C464 87.16 456.8 80 448 80H64C55.16 80 48 87.16 48 96z"/></svg></div>
        </div>
        <form action="" onSubmit={senddata}>
            <div className='popup'>
        <Input title='Room number'type='number'setstate={setroomno}/>
        <Input title='Adult capacity'type='number'setstate={setadultcapacity}/>
        <Input title='Children capacity'type='number'setstate={setchildcapacity}/>
        <Input title='Price'type='number'setstate={setprice}/>
        
        <div className='save'>
        <Button color='white' text='save'back='#d7ae63' padding="5px"widt= '75px'/>
           
        </div>
        </div>
        </form>
        <div >
        <select className='list'onChange={(e)=>{setSelectarray([...Selectarray,e.target.value])}}>
                <option>select</option>
                <option value="Telivision">Telivision</option>
                <option value="Air Condition">Air Condition</option>
                <option value="Internet access">Internet access</option>
            </select>
            </div>
            <div>
        {Selectarray.map((data,index)=>{
          return(
            <Amenities select={Selectarray} data={data} key={index} index={index} Selectarray={setSelectarray} />
          )
        })}
      </div>
        </div>
       
    
  )
}

export default Popup