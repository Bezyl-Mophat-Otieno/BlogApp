 import React from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sideBar/SideBar'
import SearchBar from '../../components/searchbar/SearchBar'
import './Home.css'
function Home() {
  return (
    <>
         <Header/>
         <SearchBar/>
    <div className='home'>
         <Posts/>
         <SideBar/>
    </div>
    </>
  )
}

export default Home