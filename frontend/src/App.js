
import './App.css';
import { HomePage } from './Components/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import SingleHotelDetails from './Components/ShowHotalData/HotelDetails';
import Signup from './Components/LoginAndSign/Signup';
import { Login } from './Components/LoginAndSign/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details/:id' element={<SingleHotelDetails/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
