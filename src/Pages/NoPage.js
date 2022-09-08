import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../styles/noPage.css'

function NoPage() {
  return (
    <div>
      <Navigation />
      <section className="error">
        <img className='error__image' src={require( "../images/404.png")} />
        <p className='error__text'>404 Page not found!</p>
      </section>
      <Footer />
    </div>
  )
}

export default NoPage