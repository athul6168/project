import React from 'react'
import Bookingdata from '../Components/Bookingdata'
import {tabledata} from '../Components/Bookingtable'
import Newboking from '../Components/Newboking'
import Navbar from '../Components/Navbar'





const Booking = () => {
  return (
    <div>
      <Navbar/>
     <Bookingdata data={tabledata}/>
      <div>
        {/* <Newboking/> */}
      </div>
      
    </div>
  )
}

export default Booking