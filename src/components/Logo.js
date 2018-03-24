import React from 'react'
import Link from 'gatsby-link'

import LogoImg from '../../public/static/img/logo.gif'

const Logo = () => (
    <Link to="/" >
        <img src={LogoImg} style={{width:100, height:100}} />
    </Link>

)

export default Logo
