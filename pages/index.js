// Theirs
import React from 'react'

export default class Index extends React.Component {
  state = {
    now: null
  }
  componentDidMount() {
    const component = this
    component.setState({ now: new Date() })
    this.interval = setInterval(() => {
      component.setState({ now: new Date() })
    }, 1000);
  }
  comonentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    if (!this.state.now) {
      return null
    }
    const hour = this.state.now.getHours()
    const minute = this.state.now.getMinutes()
    const seconds = this.state.now.getSeconds()

    return (
      <div>
        <div className="clock">
          <div className="hand minute" />
          <div className="hand hour" />
          <div className="center" />
          <div className="center red" />
          <div className="hand second" />
        </div>
        {this.state.now.toLocaleTimeString()}
        <a href="https://github.com/mfix22/whattimeisitright.now.sh/compare">
          add a new clock
        </a>
        <style>
          {`
            div {
              font-size: 50px;
              font-family: monospace;
            }

            .clock {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 500px;
              height: 500px;
              border: 20px solid #111;
              border-radius: 9999999px;
            }

            .center {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              background: #111;

              width: 50px;
              height: 50px;
              border-radius: 9999999px;
            }

            .red {
              background: red;
              width: 15px;
              height: 15px;
            }

            .hand {
              position: absolute;
              left: 50%;
              top: 50%;
              background: #111;
              transform-origin: left;
            }

            .hour {
              width: 25%;
              height: 15px;
              background: #111;
              transform: translateY(-50%)rotate(${((hour % 12) / 12) * 360 + 270}deg);
            }

            .minute {
              width: 50%;
              height: 10px;
              background: #111;
              transform: translateY(-50%) rotate(${(minute / 60) * 360 + 270}deg);
            }

            .second {
              width: 45%;
              height: 5px;
              background: red;
              transform: translateY(-50%) rotate(${(seconds / 60) * 360 + 270}deg);
            }

            a {
              position: fixed;
              font-size: 14px;
              color: #111;
              bottom: 20px;
              right: 20px;
            }
          `}
        </style>
      </div>
    )
  }
}
