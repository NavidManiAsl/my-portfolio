import React from 'react'
import '../styles/construction.css'


function Construction() {
  return (
    <div className='construction'>
        <img src={require('../images/construction.png')} alt='' className='construction__image' />
        <p className='construction__text'>Under Construction</p>
    </div>
  )
}

export default Construction