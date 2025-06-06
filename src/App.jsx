import React, { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'

const App = () => {
  const [showLogin , setShowLogin]= useState(false);
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className='App'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
