import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    // To dispatch actions from this component, we need access to the
    // store's dispatch function by calling useDispatch(postAdded()) in
    // the click handler, effectively putting together our post object with
    // all the content.

    const onSavePostClicked = () =>{
        if (title && content){
            dispatch(postAdded({
                id: nanoid(),
                title, 
                content
            })
            )

            setTitle('')
            setContent('')
        }
    }

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
            <label htmlFor='postContent'>Post Content:</label>
            <textarea
                id='postContent'
                name='postContent'
                value={content}
                onChange={onContentChanged}
            />
            <button type="button" onClick={onSavePostClicked}>Save Post</button>
        </form>
    </section>
  )
}
