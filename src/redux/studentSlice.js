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
        },
        
        addStudent: (state, action) => {
            state.list.push(action.payload)
        },
        
        updateStudent: (state, action) => {
            const index = state.list.findIndex(s => s.id === action.payload.id)
            
            if (index !== -1) {
                // Student exists - update it
                state.list[index] = action.payload
            } else {
                // Student doesn't exist - add it
                state.list.push(action.payload)  // 👈 ADDED THIS
            }
        },
        
        deleteStudent: (state, action) => {
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
    setError 
} = studentSlice.actions 

export default studentSlice.reducer