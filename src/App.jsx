import React from 'react'
import Nav1 from './components/Nav1'

import { Route, Routes } from 'react-router-dom'
import Signup from './components/Pages/Signup'
import Tshirts from './components/Pages/Tshirts'
import Home from './Home'

import Section from './components/Section'
import Faq from './components/Faq'
import Menswear from './components/Menswear'

const App = () => {
  return (
   <>
   <Nav1/>
   <Routes>
  
    <Route path='/contactus' element={<Signup/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/tshirts'element={<Tshirts/>}/>
    <Route path='/faq'element={<Faq/>}/>
    <Route path='/menswear'element={<Menswear/>}/>
   </Routes>
   <Section/>
 
   
 
   </>
  )
}

export default App
