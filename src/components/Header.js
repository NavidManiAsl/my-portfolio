import React from 'react'
import '../styles/header.css'
import { TypeAnimation } from 'react-type-animation';


function Header() {
  return (
    <div className='header'>
        <img className='header__image' src={require( "../images/myPicture.png")} alt="Photo of Navid" />
        <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'Who am i?',
    1500,
    'Who am I?',
    1500,
    'Passionate coder',
    1000,
    'Full Stack Developer',
    1000,
    'material science engineer',
    1000,
    ]}
    speed={40} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '2em' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
    </div>
  )
}

export default Header