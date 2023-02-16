import React from 'react'
import Tilt from 'react-parallax-tilt'
import './Logo.scss'

import { GiBrain } from 'react-icons/gi'

const Logo = () => {
  return (
    <div className='logo-container'>
      <Tilt className='logo'>
        <GiBrain />
      </Tilt>      
    </div>

  )
}

export default Logo