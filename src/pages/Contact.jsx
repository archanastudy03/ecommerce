import React from 'react'

export default function Contact() {
  return (
    <div className='w-[100%] justify-center items-center '>
   <div className='container mx-auto py-12 '>
    <h2 className='text-2xl  font-bold mb-6 text-center'>Contact Us</h2>
      <form className='flex flex-col items-center  justify-center'>
         <label className='text-xl md:mr-[580px] mr-52 mb-2'>Name</label>    
         <input type="text" className='w-1/2 border border-r-teal-600 h-12 px-4 py-2'required />
         <label className='text-xl md:mr-[580px] mr-52 mb-2'>E-mail</label>    
         <input type="text" className='w-1/2 border border-r-teal-600 h-12 px-4 py-2' required/>
         <label className='text-xl md:mr-[560px] mr-48 mb-2'>Message</label>    
         <textarea name="" id="" className='w-1/2 border border-r-teal-600 h-28 px-4 py-2' required/>
         <button className='px-8  py-1.5  bg-red-600 text-white mt-4 hover:bg-red-700 cursor-pointer transform transition-transform duration-300  hover:scale-105'>Submit</button>
     </form>       
    
    </div>
    </div>
  )
}
