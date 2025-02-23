import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-8 px-4 md:px-16 lg:px-24 '>
      <div className='container  mx-auto grid grid-cols-1 md:grid-cols-3  pt-4 items-center py-20  justify-between '>
        <div className=''>
         <h3 className='text-xl font-semibold'>e-Shop</h3>
         <p className='mt-4'>Your one stop shop full all your needs.Shop with us and experience the best online
           shopping experience</p>
        </div>

        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-4 '>
            <li><Link to="/" className='hover:underline'>Home</Link> </li>
            <li><Link to="/shop" className='hover:underline'>Shop</Link> </li>
            <li><Link to="/about" className='hover:underline'>About Us</Link> </li>
            <li><Link to="/contact" className='hover:underline'>Contact Us</Link> </li>
          </ul>
        </div>
        <div className=''>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4 '>
            <a href="" className='hover:text-gray-400'><FaFacebook/></a>
            <a href="" className='hover:text-gray-400'><FaTwitter/></a>
            <a href="" className='hover:text-gray-400'><FaInstagram/></a>
            <a href="" className='hover:text-gray-400'><FaLinkedin/></a>
          </div>
          <form className='flex items-center justify-center mt-8'>
            <input type="email" placeholder='Your Email' className=' w-full rounded-l-lg border border-gray-600 bg-gray-800   p-2' />
            <button className='bg-red-600 text-white   px-4 py-2 rounded-r-lg  '>Subscribe</button>
          </form>
        </div>
       </div>
      <div className='mt-2 border-t border-gray-700 pt-2'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
       <p> &copy; 2024 e-Shop. All right reserved</p>
       <div className='flex space-x-4 mt-4 md:mt-0'>
        <a href="" className='hover:underline'>Privacy Policy</a>
        <a href="" className='hover:underline'>Terms & Conditions</a>
       </div>
        </div>
        </div>
    </footer>
  )
}
