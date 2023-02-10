import React from 'react'
import './Comment.css'
import AddText from '../../components/add/AddText'
function Comment() {
  return (
    <div className=''>
      <div className='write-comment'>
        <AddText />
      </div>
      <div className='btn btn-outline-success' >comment </div>
    </div>
  )
}

export default Comment