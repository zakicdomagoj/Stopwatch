import React from "react";

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
      times: [],
    };
  }

  onStart = () => {
    if (this.timerInterval) return;

    this.timerInterval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 10);
  };

  onStop = () => {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  };

  onReset = () => {
    this.setState({ timer: 0 });
  };

  onLap = () => {
    this.setState({
      times: [...this.state.times, this.state.timer],
      timer: 0,
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.timer}</div>
        <div>
          <button onClick={this.onStart}>START</button>
          <button onClick={this.onStop}>STOP</button>
          <button onClick={this.onLap}>LAP</button>
          <button onClick={this.onReset}>RESET</button>
        </div>
        <div>
          {this.state.times.map((time, index) => (
            <div key={index}>{time}</div>
          ))}
        </div>
      </div>
    );
  }
}
