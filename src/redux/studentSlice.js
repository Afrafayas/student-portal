import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
    loading: false,
    error: null
    
}

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
    setStudents: (state, action) => {
        state.list = action.payload
    // Define your reducers here
    },
    addStudent: (state, action) => {
        state.list.push(action.payload)
    },
    updateStudent: (state, action) => {
      // Find the student index
      const index = state.list.findIndex(s => s.id === action.payload.id)
      if (index !== -1) {
        // Replace old student data with new data
        state.list[index] = action.payload
      }
    },
    deleteStudent: (state, action) => {
      // Filter out the student with given id
      state.list = state.list.filter(s => s.id !== action.payload)
    },

     setLoading: (state, action) => {
      state.loading = action.payload
    },  
    setError: (state, action) => {
      state.error = action.payload
    }
}
})

export const { 
  setStudents, 
  addStudent, 
  updateStudent, 
  deleteStudent,
  setLoading,
  setError } = studentSlice.actions 
export default studentSlice.reducer