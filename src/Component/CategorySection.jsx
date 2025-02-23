import React from 'react'
import ManCategory from '../assets/Images/man.jpg'
import WomenCategory from '../assets/Images/Women.jpg'
import KidsCategory from '../assets/Images/kids.jpg'
export default function CategorySection() {
    const catogories = [
        {
            title: "Men",
            imageUrl: ManCategory,
        },
        {
            title: "Women",
            imageUrl:WomenCategory,
        },
        {
            title: "Kids",
            imageUrl: KidsCategory,
        },
    ];
  return (
    
        <div className='container mx-auto grid grid-cols-1  sm:grid-cols-3 gap-6'>
                {catogories.map((category,index)=>{
                    return(
                        <div key={index} className='relative h-64 transform transition-transform duration-300  hover:scale-105 cursor-pointer '>
                            <img src={category.imageUrl} className='w-full h-full object-cover rounded-lg shadow-md' />
                            <div className='absolute top-20 left-12'>
                            <p className='text-xl font-bold'>{category.title}</p>
                            <p className='text-gray-600'>View All</p>
                            </div>
                        </div>
                    )
                })}
            
        </div>
    
  )
}
