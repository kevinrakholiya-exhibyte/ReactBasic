import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import AboutUs from './Pages/AboutUs'
import Navbar from './Pages/Navbar'
import CounterClass from './Component/CounterClass'
import CounterFunction from './Component/CounterFunction'
import LoginPage from './Pages/LoginPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <CounterClass /> */}
        <Routes>
          {/* <Route path='/' element={<LoginPage />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Aboutus' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App