import React, { useState ,useEffect} from 'react'
import Input from './Input'
import '../Components/input.css'
import Button from './Button'
import Amenities from './Amenities'
import apiCall from '../apiCall'
const Popup =({setaddroom ,roomData, isEditing,setisEditing,setisAmenities,isAmenities})=>{ 
  const[formData,setFormData] = useState({
    roomNumber:"",
    adultCapacity:"",
    childCapacity:"",
    price:"",
    amenities:[]
  })
 


  useEffect(() => {
    if(isEditing)setFormData(roomData.find(r=>r.id === isEditing))
   
  }, [isEditing])
  
  const {roomNumber,adultCapacity,childCapacity,price,amenities} = formData;

  const onChange = (value,key)=>{
    setFormData({
      ...formData,
      [key]:value
    })
  }

 
  const senddata=async(e)=>{
    e.preventDefault()
    console.log(isEditing);
    let res;
    if(isEditing){
      res=await updateroom()
    }
    else{
      res= await addroom();
      
    }

    
    closeWindow();
  }
  const addroom=()=>apiCall(`/rooms`,"POST",formData)
    const updateroom=()=>apiCall(`/rooms/${formData.id}`,"PUT",formData)
    .then((res)=>console.log(res))
    
    const closeWindow =()=>{
      setaddroom(false);
      setisEditing(null)
    }
    const addAmenities=(value)=>{
      console.log(value);
      if(value && !amenities.includes(value)){
        onChange([...amenities,value],"amenities")
      }
    }


  return (
    <div className='inputbox'>
        <div className='box-one'>Room {roomNumber}
        <div className='cross'  onClick={()=>{setaddroom(false);setisAmenities(false);setisEditing(false)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='30px'><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H448C456.8 432 464 424.8 464 416V96C464 87.16 456.8 80 448 80H64C55.16 80 48 87.16 48 96z"/></svg></div>
        </div>
        <form action="" onSubmit={senddata}>
            <div className='popup'>
        <Input value={roomNumber} title='Room number'type='number'setstate={value=>onChange(value,"roomNumber")}/>
        <Input value={adultCapacity} title='Adult capacity'type='number'setstate={value=>onChange(value,"adultCapacity")}/>
        <Input value={childCapacity} title='Children capacity'type='number'setstate={value=>onChange(value,"childCapacity")}/>
        <Input value={price} title='Price'type='number'setstate={value=>onChange(value,"price")}/>
        
        <div className='save'>
        <Button color='white' text='save'back='#d7ae63' padding="5px"widt= '75px'/>
           
        </div>
        </div>
        
        </form>
        { isAmenities && 
       <div>
        <div>
        
        <select className='list'onChange={(e)=>{
          addAmenities(e.target.value)}}>
                <option value=''>select</option>
                <option value="Telivision">Telivision</option>
                <option value="Air Condition">Air Condition</option>
                <option value="Internet access">Internet access</option>
            </select>
            </div>
            <div>
        {amenities.map((data,index)=>{
          return(
            <Amenities Selectarray={amenities} data={data} key={index} index={index} setSelectarray={(value)=>onChange(value,"amenities")}/>
          )
        })}
      </div>
      </div>
}
        </div>
       
    
  )
}

export default Popup