import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'
import Signin from '../pages/Signin'
import Payment from '../pages/Payment'

function MainRoutes() {

  const token=localStorage.getItem("token")
  return (
    <div>
        <Routes>

            <Route path='/' element={<Signup/>}/>
            <Route path='/home' element={token&&<Home/>}/>
            <Route path='/cart' element={token&&<Cart/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/payment' element={<Payment/>}/>



        </Routes>
    </div>
  )
}

export default MainRoutes