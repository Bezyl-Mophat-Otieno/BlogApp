import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import './Post.css'
function Post() {
  return (
    <div className="post">
    <img
      className="postImg"
      src="https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt=""
    />
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">
            Music
        </span>
        <span className="postCat">
          <FontAwesomeIcon icon={faComment}/>18
        </span>
      </div>
      <span className="postTitle">
          Lorem ipsum dolor sit amet
      </span>
      <hr />
      <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
  </div>
  )
}

export default Post