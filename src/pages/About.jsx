import React from 'react'

import banner from '../assets/banner.jpg'
export default function About() {
  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
                <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
    

                <div className='relative w-full md:w-7/12   h-96 '>
                        <img src={banner} className='h-full rounded shadow-sm w-full' />
                        <div className='absolute top-16 left-8  '>
                            <p className='mb-4 text-gray-600'>Code With Yousaf</p>
                            <h2 className='font-bold text-3xl'>WELCOME TO E-SHOP</h2>
                            <p className='text-xl mt-2.5 font-bold text-gray-800'>MILLION + PRODUCTS</p>
                            <button className='px-8  py-1.5  bg-red-600 text-white mt-4 hover:bg-red-700 cursor-pointer transform transition-transform duration-300  hover:scale-105 '>SHOP NOW</button>
                        </div>
    
                    </div>
                    <div className='w-full mt-8 md:mt-9 md:w-5/12'>
                        <div className='flex-grow   md:pl-16 flex flex-col md:items-start md:text-left items-center text-center '>
                            <h1 className=' sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>TECHNOLOGY AT E-SHOP  </h1>
                            <p className='mb-8 leading-relaxed'>
                                e-shop technology drive path-breaking, customer-focused 
                                innovation that makes high quality products accessible to Indian
                                shoppers, besides making the online shopping experience
                                convenient, intuitive and seamless.
                            </p>
                        </div>
                            
                       
                    </div>
    
                    
                </div>
                </div>

                


  )
}
