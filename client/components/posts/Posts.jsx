import React from 'react'
import './Posts.css'
import Post from '../post/Post'
import { Link } from 'react-router-dom'
function Posts() {
  return (
    <div className="posts">
     <Link className='link' to='/singlepost'><Post/></Link>
     <Link className='link' to='/singlepost'><Post/></Link>
     <Link className='link' to='/singlepost'><Post/></Link>
     <Link className='link' to='/singlepost'><Post/></Link>
     <Link className='link' to='/singlepost'><Post/></Link>
     <Link className='link' to='/singlepost'><Post/></Link>

    
    </div>  )
}

export default Posts