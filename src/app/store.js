import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
// Here, we are telling redux we want our top-level state object to have a field named
// posts inside, and all the data for state.posts will be updated by the
// postsReducer function when actions are dispatched.

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})
