import NavBar from '../../components/Navbar/NavBar'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/Play_icon.png'
import Info_icon from '../../assets/Info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
        <NavBar/>
        <div className="hero">
          <img src={hero_banner} alt="banner-img"
          className='banner-img' />
          <div className="hero-caption">
            <img src={hero_title} alt=""  className='caption-img'/>
            <p>Discovering Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, assumenda. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={Info_icon} alt="" />More Info</button>
            </div>
            <TitleCard/>
          </div>
        </div>
        <div className="more-cards">
          <TitleCard title={"Blockbuster Movie"} category={"top_rated"}/>
          <TitleCard title={"Only on Netflix"} category={"popular"}/>
          <TitleCard title={"Upcoming"} category={"upcoming"}/>
          <TitleCard title={"Top Pics for You"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}
export default Home