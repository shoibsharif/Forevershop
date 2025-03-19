// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'


import { Routes, Route } from 'react-router-dom'
// import Products from './Pages/Product/Products'
import Home from './Pages/Home/Home'
import productList from "./assets/frontend_assets/assets"
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import SinIn from './Components/SinIn/SinIn'
import Sinup from './Components/SinUp/Sinup'
import AllProduct from './Pages/AllProduct/AllProduct'
import Cart from './Pages/Cart/Cart'
import ProductDetails from './Components/ProductDetails/ProductDetails'




const App = () => {
  const [productId, setProductId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);
 
 

  useEffect(()=>{
    const filteredObject = productList.filter((product) => product._id == productId);
    setCartAllProduct([...cartAllProduct,...filteredObject])
  },[productId])


  return (
    <div className='  '>
      <Navbar cartAllProduct={cartAllProduct} />
      <Routes>
        <Route path='/' element={<Home  />}></Route>
        <Route path='/AllProduct' element={<AllProduct  />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/SinIn' element={<SinIn />}></Route>
        <Route path='/Sinup' element={<Sinup />}></Route>
        <Route path='/Cart' element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct} />}></Route>
        <Route path='/ProductDetail/:_id' element={<ProductDetails  setProductId={setProductId} />} />


      </Routes>
      <Footer />

    </div>
  )
}

export default App