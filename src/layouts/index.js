import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

class Template extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
      const loading = document.getElementById("loading")
      if (loading != undefined) loading.remove()
    }, 1500)
  }
  render() {
    if (this.state.isLoading) {
      return (
      <div>
        <Helmet title="Loading..." />
      </div>)
    }
    return (
      <div>
        <Helmet
          title="Poovamraj T T"
          meta={[
            { name: 'description', content: 'Poovamraj T T' },
            { name: 'keywords', content: 'poovamraj, poovam' },
          ]}
        />

        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1150,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}>

          {this.props.children()}

        </div>
      </div>
    )
  }
}

export default Template
