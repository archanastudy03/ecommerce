import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { Link } from 'react-router-dom'

export default function ProductCard({ item }) {
  const dispatch = useDispatch()
  const AddToCart = (e, item) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(item))
    alert("add to cart successfully")
  }


  return (
   <Link to={`/product/${item.id}`}>
    <div  className='bg-white p-4 border shadow rounded relative transform transition-transform duration-300 hover:scale-105'>
      <img src={item.image} alt="" className='w-full h-48 object-contain mb-4' />
      <h3 className='text-lg font-semibold'>{item.name}</h3>
      <p className='text-gray-500'>${item.price}</p>
      <div>
        <div className='flex items-center mt-2'>
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
        </div>
        <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'
         onClick={(e) => AddToCart(e, item)}>
          <span className='group-hover:hidden'>+</span>
          <span className='hidden group-hover:block'>Add to cart</span>
        </div>
      </div>
    </div >
  </Link>
  )
}
