import React from 'react'
import Navbar from '../Components/Navbar'
import Slide from '../Components/Slide'
import Footer from '../Components/Footer'
import '../App.css'
import  {checkdata,checkout} from '../Components/data'

const Homepage = () => {
  return (
    <div className='home'>
      
      <Navbar/>
      <Slide/>
      <div className='check'>
      <Footer title='Checking in Today' btn_text='check in' data={checkdata}/>
    
      <Footer title='Checking Out Today' btn_text='check out' data={checkout}/>
      </div>
      </div>
  )
}

export default Homepage