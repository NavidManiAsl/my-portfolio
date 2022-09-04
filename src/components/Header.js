import React from 'react'
import '../styles/header.css'
import { TypeAnimation } from 'react-type-animation';


function Header() {
  return (
    <div className='header'>
        <img className='header__image' src={require( "../images/myPicture.png")} alt="Navid Mani Asl" />
        <div style={{width:500}}>
            <TypeAnimation
            sequence={[
            '<Who am i? />',
            700,
            '<Who am I? />',
            3500,
            '<Passionate coder />',
            2500,
            '<Material science engineer />',
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
  )
}

export default Header
