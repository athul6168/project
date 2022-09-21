
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage'
import Room from './Pages/Room';
import Booking from'./Pages/Booking'
import Newboking from './Components/Newboking';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Homepage/>}/>
        <Route path='/room'element={<Room/>}/>
        <Route path='/Booking'element={<Booking/>}/>
        <Route path='/newbooking'element={<Newboking/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
