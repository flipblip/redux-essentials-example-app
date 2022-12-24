import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) =>{
        return (
            <button 
                key={name}
                type="button"
                className='muted-button reaction-button'
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name}))
                }

                >
                {emoji} {post.reactions[name]}
            </button>
          )
        })
        
        return <div>{reactionButtons}</div>
}

// Since we don't yet have post.reactions field in our data, we'll need to
// update the initialState post objects and our postAdded preapre callback
// to make sure that every post has that data inside, e.g.,

// reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}

// Now, we can define a new reducer that will handle updating the reaction count for
// a post when a user clicks the reaction button.

// For this, we'll need to know the ID of the post, and which reaction button
// the user clicked on.
// Our action.payload will be an object that looks like {id, reaction}


