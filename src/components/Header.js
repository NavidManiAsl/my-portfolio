import React from 'react'
import '../styles/header.css'
import { TypeAnimation } from 'react-type-animation';


function Header() {
  return (
    <div className='header'>
        <img className='header__image' src={require( "../images/myPicture.png")} alt="Photo of Navid" />
        <div style={{width:400}}>
            <TypeAnimation
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
            speed={40} 
            style={{ fontSize: '2em' }}
            wrapper="span" 
            repeat={Infinity} 
        />
        </div>
    </div>
  )
}

export default Header