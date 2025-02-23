import React, { useState } from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { setSearchTerm } from '../redux/ProductSlice';
export default function Navbar() {
  const [isModal,setIsModal] = useState(false)
  const [isLogin,setIsLogin] = useState(true)
  const [search,setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSearch = (e) =>{
   e.preventDefault()
   dispatch(setSearchTerm(search))
   navigate('/filter-data')
  }

  const openSignUp = () =>{
    setIsLogin(false)
    setIsModal(true)
  }

  const openLogin = () =>{
    setIsLogin(true)
    setIsModal(true)
  }




  const products = useSelector(state=> state.cart.products)

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold '>

          <Link to="/" >e-Shop</Link>
        </div>
        <div className='relative flex-1 mx-4'>

          <form onSubmit={handleSearch}>
            <input type='text' placeholder='product&df' className='w-full border py-2 px-4 ' onChange={(e)=>setSearch(e.target.value)} />
            <FaSearch className='absolute top-3 right-3 text-red-500' />
          </form>

        </div>
        <div className='flex items-center space-x-4'>
          <Link to="/cart" className='relative'>
            <FaShoppingCart className='text-lg' />
            {products.length > 0 &&(
              <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'> {products.length}</span>
            )}
          </Link>
          <button className='hidden md:block' onClick={()=>setIsModal(true)}>Login | Register</button>
          <button className='block md:hidden'><FaUser /></button>

        </div>
      </div>
      <div className='flex justify-center items-center py-4 space-x-10 text-sm font-bold '>

        <Link className='hover:underline' to="/" >Home</Link>
        <Link className='hover:underline' to="/shop" >Shop</Link>
        <Link className='hover:underline' to="/about" >About</Link>
        <Link className='hover:underline' to="/contact" >Contact</Link>
      </div>

       <Modal isModal={isModal} setIsModal={setIsModal}>
          {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/> }
       </Modal>
    </nav>
  )
}

