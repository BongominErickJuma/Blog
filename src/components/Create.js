import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const Create = () => {
  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')
  const [ author, setAuthor ] = useState('')

  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()

    const blog = { title, body, author }

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=> {
      history.push('/blogs')
    })
  }

  return (
    <div className='create-box'>
      <h2 className='title'>create a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog Title</label>
        </div>
        <div className="user-box">
          <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog Body</label>
        </div>
        <div className="user-box">
          <input 
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          />
          <label>Blog Author</label>
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  )
}

export default Create
