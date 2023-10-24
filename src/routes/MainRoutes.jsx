import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'

function MainRoutes() {
  return (
    <div>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>



        </Routes>
    </div>
  )
}

export default MainRoutes