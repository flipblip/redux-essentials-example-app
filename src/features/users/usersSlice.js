import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: '0', name: 'Lil Mayo'},
    {id: '1', name: 'Chris Grant'},
    {id: '2', name: 'Daniel Ryan'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer

// At the moment, we will leave the reducers field as an empty object.
// Next, we'll need to import the usersReducer into our store file and add it to the
// store setup