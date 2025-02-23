import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Component/ProductCard'
import NoProductImage from '../assets/Images/no-products-found.jpg'

const FilterData = () => {
    const filterProducts  = useSelector(state=> state.product.filterData)
  return (
    <div className='container mx-auto py-12'>
        {filterProducts.length > 0 ?
          <>
            <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
            {filterProducts.map(((item,index)=>(
             <ProductCard item={item} key={index} />
           )))}
           </div>
           </>
           :
           <div className='flex justify-center'>
            <img src={NoProductImage} alt="" />
            </div>
         }
       </div>
  )
}

export default FilterData