//./src/Content.js
import React, { Component } from 'react'
import ThemeSwitch from '../ThemeSwitch'

class Content extends Component {

  constructor() {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <p style={{ color: this.state.themeColor }}>this is content</p>
        <ThemeSwitch />
      </div>
    )
  }
}

export default Content