import React from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { TypeAnimation } from 'react-type-animation';
import '../styles/home.css'
import Showcase from '../components/Showcase';

function Home() {
  return (
    <div className='home'>
        <Navigation />
        <div className="home__content">
        <img className='home__image' src={require( "../images/myPicture.png")} alt="Navid Mani Asl" />
          <div  className='home__text'>
              <TypeAnimation
              sequence={[
              '<Who am i? />',
              700,
              '<Who am I? />',
              3000,
              '<Back-end Developer/>',
              2500,
              '<Front-end Developer />',
              2500,
              '<Full Stack Developer />',
              1000,
              ]}
              speed={20} 
              wrapper="span" 
              repeat={0} 
          />
          </div>
        </div>
        <Showcase />
        <Footer />
    </div>
  )
}

export default Home