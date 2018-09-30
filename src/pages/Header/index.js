import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>this is header</h1>
    )
  }
}

export default Header