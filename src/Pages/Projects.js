import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Construction from '../components/Construction'
import '../styles/projects.css'

function Projects() {
  return (
    <div className='projects'>
      <Navigation />
        <Construction />
      <Footer />
    </div>
  )
}

export default Projects