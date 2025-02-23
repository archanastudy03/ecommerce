import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import Footer from './Component/Footer'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import { useState } from 'react'
import Order from './pages/Order'
import FilterData from './pages/FilterData'
import DetailsPage from './pages/DetailsPage'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [order,setOrder] = useState(null)
  return (
   <div >
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut setOrder={setOrder}/>}/>
        <Route path='/order-confirmation' element={<Order order={order}/>}/>
        <Route path='/filter-data' element={<FilterData/>}/>
        <Route path="/product/:id" element={<DetailsPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   
   </div>
 
  )
}

export default App
