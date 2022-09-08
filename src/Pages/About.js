import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { TypeAnimation } from 'react-type-animation';
import '../styles/about.css'

function About() {
  return (
    <div>
      <Navigation />
      <section className='about-text'>
        <div style={{width:500} } >
              <TypeAnimation
              sequence={[
              '<I’m Navid and I’m a solution-oriented web developer with a background in metallurgical engineering.My passion lies in creating, problem solving and teamwork preferably all at the same time. My coworkers would describe me as a passionate, resourceful person who they can rely on for help and information />'
            ]}
            speed={40} 
            wrapper="span" 
            repeat={0} 
        />
        </div>
      </section>
    <Footer />
  </div>
)
}

export default About
             
            
            