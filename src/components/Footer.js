import React from 'react'
import '../styles/footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__links">
        <IconContext.Provider value={{size:'2rem',style: { verticalAlign: 'bottom' }}}>
          <a href='https://github.com/NavidManiAsl' className='footer__link'><FaGithubSquare  /></a>
        <a href='https://www.linkedin.com/in/navid-maniasl-89625b1aa' className='footer__link'><AiOutlineLinkedin  /></a>
        </IconContext.Provider>
      </div>
      <p className='footer__text'>
        Navid Maniasl © TWENTYTWENTYTWO
      </p>
    </div>
  )
}

export default Footer 