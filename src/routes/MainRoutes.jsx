import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'

function MainRoutes() {
  return (
    <div>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>



        </Routes>
    </div>
  )
}

export default MainRoutes