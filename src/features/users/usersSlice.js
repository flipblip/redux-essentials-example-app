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