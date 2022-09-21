import React from 'react'
import Navbar from '../Components/Navbar'
import Roomtable from '../Components/Roomtable'
import { roomdata } from '../Components/Tabledata'
import Popup from '../Components/Popup'


const Room = () => {
  return (
    
    <div>
      <div>
        <Navbar/>
        
              </div>
      <Roomtable btn_text='+Add Room'data={roomdata}/>
      <div>
      {/* <Popup/> */}
      </div>
    </div>
    
  )
}

export default Room