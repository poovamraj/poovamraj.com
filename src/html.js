import React from "react"
import LoaderImage from '../public/static/img/loading.gif'
import constants from './common/constants'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          <div style={{
            backgroundColor: constants.THEME_MINOR_COLOR, position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}>
            <img id="loading" src={LoaderImage} style={{
              margin: 'auto', position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }} />

            {this.props.preBodyComponents}
            <div
              key={`body`}
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: this.props.body }}
            >
            </div>
            {this.props.postBodyComponents}
          </div>
        </body>
      </html>
    )
  }
}
