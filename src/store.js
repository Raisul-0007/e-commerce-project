import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './components/slice/counterSlice'

export const store = configureStore({
  reducer: {
  counter: counterSlice.reducer,
  },
})