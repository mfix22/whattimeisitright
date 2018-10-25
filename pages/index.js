// Theirs
import React from 'react'

export default class Index extends React.Component {
  state = {
    now: new Date()
  }
  componentDidMount() {
    const component = this
    this.interval = setInterval(() => {
      component.setState({ now: new Date() })
    }, 1000);
  }
  comonentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>
        {this.state.now.toLocaleTimeString()}
        <style>
          {`
            div {
              font-size: 90px;
            }
          `}
        </style>
      </div>
    )
  }
}
