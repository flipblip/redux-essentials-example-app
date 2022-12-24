import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // ----------- Adding authors for posts -------

    // To keep track of which user wrote a particular post, we'll update
    // AddPostForm component so that we can select a user, including that user's ID as
    // part of the post. We can use the ID to look up the user's name.
    // First, we modify the postAdded action creator to accept a user ID
    // as an argument and include that in the action.

    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()

    // Selecting our users

    const users = useSelector((state) => state.users)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    // To dispatch actions from this component, we need access to the
    // store's dispatch function by calling useDispatch(postAdded()) in
    // the click handler, effectively putting together our post object with
    // all the content.

    const onSavePostClicked = () =>{
        if (title && content){
            dispatch(postAdded(title, content, userId))

            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map(user =>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor='postTitle'>Post Title:</label>
            <input
                type='text'
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor='postAuthor'>Author:</label>
            <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {userOptions}
            </select>
            <label htmlFor='postContent'>Post Content:</label>
            <textarea
                id='postContent'
                name='postContent'
                value={content}
                onChange={onContentChanged}
            />
            <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
        </form>
    </section>
  )
}
