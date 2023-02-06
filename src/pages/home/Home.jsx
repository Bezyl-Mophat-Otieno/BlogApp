import Header from '../../components/header/Header'
import './Home.css'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sideBar/SideBar'
import SearchBar from '../../components/searchbar/SearchBar'
function Home() {
  return (
    <>
      <Header />
      <SearchBar />


      <Posts />
      <SideBar />
    </>
  )
}

export default Home