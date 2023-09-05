import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-list'>
      <h2 className='title'>{title}</h2>
      {
        blogs.map((blog)=> (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}><h3>{blog.title}</h3></Link>
            <code>{blog.author}</code>
            <p>{blog.body}</p>
          </div>
          
        ))
      }      
    </div>
  )
}

export default BlogList
