import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homescreens from './screens/Homescreens';
import Registerscreens from './screens/Registerscreens';
import Loginscreens from './screens/Loginscreens';
import Aboutscreens from './screens/Aboutscreens';
import Footer from './components/Footer';
import Contact from './screens/Contact';
import BookingForm from './screens/BookingForm';
import PaymentForm from './screens/PaymentForm';
import Room from './screens/Room';





function App() {
  return (
    <div className="App">
      
      <Navbar />
      <BrowserRouter>
        <Routes> 
          <Route path='/home' element={<Homescreens />} /> 
          <Route path='/register' element={<Registerscreens/>} /> 
          <Route path='/login' element={<Loginscreens/>} /> 
          <Route path='/about' element={<Aboutscreens/>} /> 
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/payment' element={<PaymentForm/>}/>
          <Route path="/book" element={<BookingForm />} />  
          <Route path="/room" element={<Room />} />       
       
        </Routes>
      </BrowserRouter>
      

      <Footer/>
      
    </div>
  );
}

export default App;
