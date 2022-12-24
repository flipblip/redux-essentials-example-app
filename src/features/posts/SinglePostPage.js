import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'

// ------------- SinglePostPage --------------
// We're creating this component so that we can use React Router to show
// this component when the page URL looks like /posts/:id

// React router will pass in a match object as a prop that contains
// the URL info we're looking for.
// When we set up the route to render this component, we're going to tell
// it to parse the second part of the URL as a variable named
// postId, and we can read that value form match.params

const SinglePostPage = ({ match }) => {
    const { postId } = match.params

    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )

    if (!post){
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

  return (
    <section>
        <article className='post'>
            <h2>{post.title}</h2>
            <PostAuthor userId={post.user} />
            <p className='post-content'>{post.content}</p>
            <Link to={`/editPost/${post.id}`} className='button'>
                Edit Post
            </Link>
        </article>
    </section>
  )
}

export default SinglePostPage