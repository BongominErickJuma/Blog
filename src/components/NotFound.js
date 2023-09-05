import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1>Sorry!</h1>
      <p>We cound not find the page you requested for</p>
      <Link to='/'>back to home</Link>
    </div>
  )
}

export default NotFound
