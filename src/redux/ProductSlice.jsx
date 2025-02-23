import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    searchTerm: "",
    filterData: []
}

const ProductSlice = createSlice({
   name: 'products',
   initialState,
   reducers : {
      setProducts(state,action){
         state.products = action.payload
      },
      setSearchTerm(state,actions){
         state.searchTerm = actions.payload
         state.filterData = state.products.filter(product=>
            product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
         )
      },
      
 
    },
})

export const {setProducts,setSearchTerm} = ProductSlice.actions;
export default ProductSlice.reducer