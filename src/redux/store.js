import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './studentSlice.js'

export const store = configureStore({
  reducer: {
    students: studentReducer
  }
})


            

