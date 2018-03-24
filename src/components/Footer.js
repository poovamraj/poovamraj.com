import React from 'react'
import constants from '../common/constants'

class Footer extends React.Component {
    render() {
        return (
            <footer style={{
                position:'absolute',
                bottom:0,
                backgroundColor: constants.THEME_MAJOR_COLOR,
                marginTop: '1.5rem',
                width: '100%',
            }}>
                <p style={{
                    fontSize: '0.7rem', fontFamily: constants.THEME_MINOR_FONT,
                }}> © Copyrights reserved </p>
            </footer>
        )
    }
}

export default Footer;