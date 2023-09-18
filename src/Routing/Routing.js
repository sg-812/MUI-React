import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from '../Layout/Header'
import Home from '../Components/Home'
import About from '../Components/About'

const Routing = () => {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path="" element={<Home/>}/>
         <Route path="about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Routing