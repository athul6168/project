import React, { useState } from 'react'
import Button from '../Components/Button'
import'../Components/Roomtable.css'
import Popup from './Popup'
const Roomtable = ({btn_text,data}) => {
const [addroom,setaddroom] = useState(false)
function poproom(){
  console.log(setaddroom);
  setaddroom(true)

}



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
              <div className='deatiles'>
                <div style={{color:'orange'}}>{data.no}</div>
                <div >{data.ac}</div>
                <div>{data.cc}</div>
                <div style={{color:'orange'}} >{data.pr}</div>
              </div>
            )
          })}
        </div>
        <div className={addroom ?"popwindow":""}>
          {addroom && <Popup setaddroom={setaddroom}/>}
        </div>
        </div>
    </div>
  )
}

export default Roomtable