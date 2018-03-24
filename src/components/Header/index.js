import React from 'react'
import Link from 'gatsby-link'
import Logo from '../Logo'
import Constants from '../../common/constants'

const Header = () => (
  <div
    style={{
      background: Constants.THEME_MAJOR_COLOR,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1150,
        padding: '1.0rem 1.0875rem',
      }}
    >

      <Logo />
      <div style={{color:Constants.THEME_MINOR_COLOR,fontFamily:Constants.THEME_MINOR_FONT,fontSize:'1rem'}}>
      POOVAMRAJ T T - Developer</div>
      
    </div>
  </div>
)

export default Header
