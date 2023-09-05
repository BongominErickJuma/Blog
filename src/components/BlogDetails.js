import React from 'react'
import { useParams, useHistory} from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from './useFetch'

const BlogDetails = () => {
    const { id } = useParams()
    const history = useHistory()
    const { data: blog , isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`)

    const handleDelete = () => {
      fetch(`http://localhost:8000/blogs/${blog.id}`, {
        method: 'DELETE'
      })
      .then(()=> {
        history.push('/blogs')
      })
    }

  return (
    <div>
        {error && <div>{ error }</div>}
        {isPending && <div>Loading...</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <code>Written by { blog.author }</code>
                <p>{blog.body}</p>
                <button className="btn" onClick={handleDelete}>Delete</button>
            </article>
        )}
    </div>
  )
}

export default BlogDetails
