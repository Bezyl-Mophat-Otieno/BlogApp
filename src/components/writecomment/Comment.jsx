import React from 'react'
import './Comment.css'
function Comment() {
  return (
    <div>
    <form  className='write-comment'>
       <textarea rows='5' placeholder='Write  a Comment '  ></textarea>
    </form>
       <div className='btn btn-outline-success commentBtn' > Send </div>
    </div>
  )
}

export default Comment