import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      let findProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id)
      if(findProduct  !== -1){
       state.cartItem[findProduct].qun =+ 1;
        
      }else{
        state.cartItem = [{...action.payload, qun:1}]
      }
    },
  },
}) 

export const {addToCart}  = counterSlice.actions

export default counterSlice.reducer