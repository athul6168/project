import React from 'react'
import Navbar from '../Components/Navbar'
import Roomtable from '../Components/Roomtable'
// import { roomdata } from '../Components/Tabledata'
// import Popup from '../Components/Popup'
import { useEffect } from 'react'
import { useState } from 'react'

const Room = () => {
 
  const [roomData, setRoomData]=useState([])
const [addroom,setaddroom] = useState(false)
const [isEditing, setisEditing] = useState(null)

// const [Editroom,setEditroom]=useState(false)
// function poproom(){
//   console.log(setaddroom);
//   setaddroom(true)
 
 useEffect(()=>{
  fetch("http://localhost:8000/rooms")
  .then(res=>res.json())
  .then(response=>{
    setRoomData(response)
  })
  },[addroom])
  return (
    
    <div>
      <div>
        <Navbar/>
        
              </div>
      <Roomtable btn_text='+Add Room' setRoomData={setRoomData} data={roomData} isEditing={isEditing} setisEditing={setisEditing}/>
      <div>
      {/* <Popup/> */}
      </div>
    </div>
    
  )
}


export default Room