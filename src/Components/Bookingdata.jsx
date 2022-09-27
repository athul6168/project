import React from 'react'
import '../Components/bookingtable.css'
import Button from './Button'
import { NavLink } from 'react-router-dom'


const Bookingdata= ({text,data}) => {
  return (
    <div className='bookingtable-main'>
        <div className='bookingtable-head'>
        
           <div className='book'> Booking</div>
           <div className='bookingbtn1'><NavLink to='/Newbooking' className='link2'>NewBooking</NavLink></div>
            {/* <div className='bookingbtn1' ><Button color='#d7ae63' text='new booking'back='rgb(242, 246, 246)' padding="2px"widt= '75px'/></div> */}
            </div>
        
            

           
            <div className='bookinginput'>
                <div className='bookinginput1'><input type="text" /></div>
                <div className='bookinginput2'><input type="text" /></div>
       <div className='bookingbtn'><Button color='white' text='SEARCH'back='#d7ae63' padding="5px"widt= '75px'/></div>

                
            </div>
            <div className='bookingtable'>
                    <div className='bookingtable-heading'>
                    <div>Gust last name</div>
                    <div>Gust first name</div>
                    <div>Room N.o</div>
                    <div>Check in date</div>
                    <div>Chick out date</div>
                    <div>Status</div>
                    </div>
              <div className='bookingtable-row'>
                {data.map((data,indux)=>{
                  return(
                    <div className='booking-table-data'>
                      <div>{data.lastname}</div>
                      <div>{data.firstname}</div>
                      <div>{data.roomno}</div>
                      <div>{data.checkin}</div>
                      <div>{data.checkout}</div>
                      <div>{data.status}</div>
                    </div>
                  )
                })}

                

              </div>

            </div>
            
        

    
        

    </div>
  )
}

export default Bookingdata