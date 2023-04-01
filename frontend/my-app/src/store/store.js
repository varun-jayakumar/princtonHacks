import { configureStore } from '@reduxjs/toolkit'
import addLearningFormReducer from './addLearningFormSlice' 

export const store = configureStore({
  reducer: {
    addLearningForm: addLearningFormReducer
  },
})