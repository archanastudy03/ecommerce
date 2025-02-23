import React, { useState } from 'react'

export default function ChangeAddress({setAddress,setIsModal}){
  const [newAddress,setNewAddress]= useState("")
  const onClose = () =>{
    setAddress(newAddress)
    setIsModal(false)
  }
  return (
    <div>
        <h3 className='mb-5 text-2xl font-semibold'>Change Shipping Address</h3>
        <div>
            
            <input type="text" placeholder='Enter new address' className='w-full border p-2 mb-4' onChange={(e)=>setNewAddress(e.target.value)} />
            <div className='flex justify-end'>
            <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2' onClick={()=>setIsModal(false)}>Cancel</button>
            <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={onClose}>Save Address</button>
            </div>
        </div>
    </div>
  )
}
