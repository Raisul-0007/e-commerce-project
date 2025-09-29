import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state,action)=>{
      let index = state.cartItem.findIndex((item)=> item.id == action.payload.id)
      if(index != -1){
        state.cartItem[index].qun++
      }else{
        state.cartItem = [...state.cartItem, action.payload]
      }
    },
    removeCart: (state,action)=>{
      let filtercart = state.cartItem.filter((item)=> item.id !=action.payload.id) 
      state.cartItem = filtercart;
    },
    increament:(state,action)=>{
      let index = state.cartItem.findIndex((item)=> item.id === action.payload.id)
      if(index !== -1){
        state.cartItem[index].qun++
      }
    },
    discreament:(state,action)=>{
      let index = state.cartItem.findIndex((item)=> item.id === action.payload.id)
      if(index !== -1 && state.cartItem[index].qun > 1){
        state.cartItem[index].qun--
      }
    }
  },
})

export const { addToCart,removeCart,increament,discreament } = productSlice.actions

export default productSlice.reducer