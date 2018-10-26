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
          `}
        </style>
      </div>
    )
  }
}
