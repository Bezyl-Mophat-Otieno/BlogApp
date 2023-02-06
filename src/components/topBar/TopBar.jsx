import React from 'react'
import './TopBar.css'
import { Link } from "react-router-dom";
import Login from '../modals/Login';
import { useState } from 'react';
import SearchBar from '../searchbar/SearchBar';
function TopBar() {
  const [show, setShow] = useState(false);
  let user = false;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className='top'>
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <Link to='/write' className='link'> <li className='topListItem '> {user && "WRITE"}</li></Link>
            <Link to='/myblogs' className='link'> <li className='topListItem '> {user && "MYBLOGS"}</li></Link>
            <Link to='#' className='link'>  {user && <li className='topListItem' >Logout</li>} </Link>
            <Login handleClose={handleClose} handleShow={handleShow} show={show} />

          </ul>
        </div>
        <div className='topRight'>

          {

            user && <Link to='/settings'> <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            /></Link>

          }
          <Link to='/settings'> <img
            className="topImg"
            src="https://app.logo.com/view/logo_011f3303-7bdf-4008-bfab-b8665a4799b2"
            alt=""
          /></Link>
          {

            !user &&
            <ul className="topList">
              <Link to='/register' className='link'><li className="topListItem">REGISTER</li></Link>
              <Link to='/login' className='link'><li className="topListItem">LOGIN</li></Link>
            </ul>



          }


          {user && <span>Kalasinga Abdulmalik</span>}
        </div>

      </div>
    </>
  )
}

export default TopBar