import { createSlice } from "@reduxjs/toolkit";
// ----------------- Main Posts Feed --------------------------------
        // -The main feature of the social media feed app will be a list of posts

// The first step is to create a new Redux slice that will contain data for our posts
// We'll import createSlice, define the initial posts array, and pass thatt
// to createSlice, and export the posts reducer function that createSlice created for us
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer

// Every time we create a new slice, we need to add its reducer function to our Redux store.
// Since we already hav a redux store without any data, we'll update the call to configureStore
// by passing postsReducer function as a reducer field named posts in our app/store.js