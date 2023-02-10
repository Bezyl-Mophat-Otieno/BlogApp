import React from 'react'
import './Posts.css'
import Post from '../post/Post'
import { Link } from 'react-router-dom'
function Posts() {
  return (
    <div className="posts">
      <Link className='link' to='/singlepost/6'><Post /></Link>
      <Link className='link' to='/singlepost/5'><Post /></Link>
      <Link className='link' to='/singlepost/4'><Post /></Link>
      <Link className='link' to='/singlepost/3'><Post /></Link>
      <Link className='link' to='/singlepost/2'><Post /></Link>
      <Link className='link' to='/singlepost/1'><Post /></Link>


    </div>)
}

export default Posts