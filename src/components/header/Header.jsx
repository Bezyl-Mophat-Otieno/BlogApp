import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">The</span>
        <span className="headerTitleLg">WHISPERER...</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />

    </div>
  )
}

export default Header