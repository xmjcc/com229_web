/**
 * Author: Wenping Wang
 * File Name: MainRouter.jsx  
 * Date: 2024-09-30
 *  Student number: 301250155
 */
// ========================
// Imports
// ========================
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/layout'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'


// ========================
// MainRouter Component
// ========================
const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
 <Route exact path="/home" element={<Home/>} />
 <Route exact path="/about" element={<About/>} />
 <Route exact path="/projects" element={<Projects/>} />
 <Route exact path="/services" element={<Services/>} />
 <Route exact path="/contact" element={<Contact/>} />
  {/* Redirect root path "/" to "/home" */}
  <Route path="/" element={<Navigate to="/home" />} />


 </Routes>
 </div>
)
}

// ========================
// Export
// ========================
export default MainRouter
