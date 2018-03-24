import React from 'react'
import Link from 'gatsby-link'
import constants from '../common/constants'

const IndexPage = () => (
  <div style={{color: constants.THEME_MAJOR_COLOR, fontFamily: constants.THEME_MINOR_FONT,fontSize:'3rem'}}>
    <p>Hello!</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <br/>
    <br/>
    <br/>
    <br/> 
    <br/>
    <br/>
    <br/> 
    <br/>
    <br/>
    <br/> 
    <br/>
    <br/> 
    <Link  style={{color: constants.THEME_MAJOR_COLOR}}to="/page-2/">Go to page 2</Link><br/>
  </div>
)

export default IndexPage
