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
    }
  },
})

export const { addToCart } = productSlice.actions

export default productSlice.reducer