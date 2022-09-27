import React, { useEffect, useState } from 'react'
import apiCall from '../apiCall'
import Button from '../Components/Button'
import'../Components/Roomtable.css'
import Editicon from './Editicon'
import Popup from './Popup'



const Roomtable = ({btn_text,data,setRoomData,setisEditing,isEditing}) => {
 
const [addroom,setaddroom] = useState(false)
const [isAmenities, setisAmenities] = useState(false)
const [deleteid, setdeleteid] = useState(null)

function poproom(){
  console.log(setaddroom);
  setaddroom(true)
 
  
  

}
const deleteroom=async()=>{
  const res=await apiCall(`/rooms/${deleteid}`,"DELETE")
  setdeleteid(null)
}
// useEffect(()=>{
//   apiCall("/ rooms","GET")
//   .then
// })




  return (
    <div className='roommain'>
        <div className='roomhead'>
        <div className='room'>Rooms</div>
        </div>
        <div className='roombtn'>
          
        <div><Button color='white' text={btn_text}back='#d7ae63' padding="10px"widt= '100%' functionality={poproom}/></div>
        </div>
        <div className='table'>
        <div className='heading'>
        <div>
          Room No
        </div>
        <div>
          Adult Capacity
        </div>
        <div>
          Children Capacity
        </div>
        <div>
          Price
        </div>
        </div>
        <div className='row'>
          {data.map((data,index)=>{
            return(
              <div className='deatiles' key={data.id}>
                <div style={{color:'orange'}}>{data.roomNumber}</div>
                <div >{data.adultCapacity}</div>
                <div>{data.childCapacity}</div>
                <div className='buttons'>{data.price}
        <div className='editbutton'><svg onClick={()=>(setaddroom(true),setisAmenities(true) , setisEditing(data.id))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
        </div>
        <div className='delete' onClick={()=>{setdeleteid(data.id)}}><svg xmlns="http://www.w3.org/2000/svg"
                                    height='20px' viewBox="0 0 448 512"><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z" /></svg>
                                </div>
                </div>
               
              </div>
            )
          })}
        </div>
        <div className={addroom||deleteid ?"popwindow":""}>
          {addroom && <Popup roomData={data} setisEditing={setisEditing} setaddroom={setaddroom} isEditing={isEditing}
          setRoomData={setRoomData} setisAmenities={setisAmenities} isAmenities={isAmenities}/>}
          {
                        deleteid && 
                        
                        <div className="delete_popup">
                            <div className="delete_text"><h3>are you sure</h3></div>
                            <div className="delete_buttons">
                                <button onClick={deleteroom}>Delete</button>
                                <button onClick={()=>{setdeleteid(null)}}>close</button>
                            </div>
                        
                        </div>
                    }
          
        </div>
        
        </div>
    </div>
  )
}

export default Roomtable