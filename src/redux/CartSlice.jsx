import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    totalQuantity: 0,
    totalPrice:0
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,actions){
            const newItem = actions.payload
            const itemIndex = state.products.find((item)=>item.id === newItem.id)
            if(itemIndex){
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price
            }
            else{
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image:newItem.image
                })
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },
        removeCart(state,actions){
            const id = actions.payload
            const findIndex = state.products.find((item)=>item.id === id)
            if(findIndex){
                findIndex.totalQuantity -= findIndex.quantity
                findIndex.totalPrice -= findIndex.price
            state.products = state.products.filter(item => item.id != id)
            }
        },
        incrementQuantity(state,actions){
            const id = actions.payload
            const findIndex = state.products.find((item)=> item.id === id)
            if(findIndex){
                findIndex.quantity++;
                findIndex.totalPrice += findIndex.price
                state.totalQuantity++;
                state.totalPrice += findIndex.price
            }
        },
        
        decerementQuantity(state,actions){
            const id = actions.payload
            const findIndex = state.products.find((item)=> item.id === id)
            if(findIndex.quantity > 1){
            if(findIndex){
                findIndex.quantity --;
                findIndex.totalPrice -= findIndex.price
                state.totalQuantity --;
                state.totalPrice -= findIndex.price

            }
        }
    }
    },
})
export const {addToCart,removeCart, incrementQuantity,decerementQuantity} = CartSlice.actions
export default CartSlice.reducer