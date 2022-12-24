import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
// ----------------- Main Posts Feed --------------------------------
        // -The main feature of the social media feed app will be a list of posts

// The first step is to create a new Redux slice that will contain data for our posts
// We'll import createSlice, define the initial posts array, and pass thatt
// to createSlice, and export the posts reducer function that createSlice created for us
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!', date: sub(new Date(), { minutes: 10 }).toISOString() },
    { id: '2', title: 'Second Post', content: 'More text', date: sub(new Date(), { minutes: 5 }).toISOString() }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // Here, we are adding a postAdded function that will receive two argumetns
        // 1. the current state value
        // 2. the action object that was dispatched
        // In this case, the state argumennt will be the array of posts by itself
        postAdded: {
            reducer(state, action){
            state.push(action.payload)
        },

        // ------- createSlice "prepare callback" ------
        // This callback function can take multiple arguments then return adn
        // object with the payload field inside.
        // We can generate unique IDs or run other synchrnous logic dictating
        // what values should go into the action object.

        prepare(title, content, userId){
            return{
                payload: {
                    id: nanoid(),
                    date: new Date().toISOString(),
                    title,
                    content,
                    user: userId
                }
            }
        }
            // With this, our AddPostForm component doesn't have to worry about
            // what the payload object looks like.
            // The action creator takes care of putting this together the right way.
            // We can now upadt the component so that it passes in title and content
            // as arguments when it dispatches postAdded
        },

        // ------ Updating Post Entries
        // We need to update our postSlice to create a new reducer function
        // and action so that the store knows how to update the posts.
        // We will add a new postUpdated function which will take the ID of the post
        // we're updating plus the new title and content that the user has typed in.

        postUpdated(state, action){
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)

            if (existingPost){
                existingPost.title = title
                existingPost.content = content
            }
        },

        reactionAdded(state, action){
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)

            if (existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer

// Every time we create a new slice, we need to add its reducer function to our Redux store.
// Since we already hav a redux store without any data, we'll update the call to configureStore
// by passing postsReducer function as a reducer field named posts in our app/store.js