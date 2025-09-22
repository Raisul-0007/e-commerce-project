import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    allProduct: (state,action)=>{
      state.value = action.payload
    }
  },
})

export const { allProduct } = productSlice.actions

export default productSlice.reducer