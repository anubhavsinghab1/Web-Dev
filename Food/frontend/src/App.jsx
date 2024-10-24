import React, { useState } from 'react'
import NavBar from './components/navBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Footer from './components/footer/Footer';
import LoginPopup from './components/loginpopup/LoginPopup';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/myorders/MyOrders';

const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/verify'element={<Verify/>}/>
          <Route path='/myorders'element={<MyOrders/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App;