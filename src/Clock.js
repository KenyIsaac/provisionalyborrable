import * as React from "react";

export default class Clock extends React.Component {
  state = {
    startTime: null,
    diff: null,
    paused: 0,
    interval: null
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (e) => {
    e.preventDefault();
  };

  start = () => {
    if (this.state.startTime) return;
    this.setState({
      startTime: +new Date() - this.state.paused,
      interval: requestAnimationFrame(this.tick),
      paused: 0
    });
  };

  stop = () => {
    cancelAnimationFrame(this.state.interval);
    this.setState({
      startTime: null,
      paused: +this.state.diff
    });
  };

  reset = () => {
    cancelAnimationFrame(this.state.interval);
    this.setState({
      startTime: null,
      diff: null,
      paused: 0,
      interval: null
    });
  };

  tick = () => {
    this.setState({
      diff: new Date(+new Date() - this.state.startTime),
      interval: requestAnimationFrame(this.tick)
    });
  };

  addZero = (n) => {
    return n < 10 ? "0" + n : n;
  };

  rando = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  testLoop = () => {
    let arr = [];
    for (let i = this.rando(); i < 200; i++) {
      for (let j = this.rando(); j < 100; j++) {
        arr.push([i, j]);
      }
    }
    return arr;
  };

  render() {
    let diff = this.state.diff;
    let hundredths = diff
      ? Math.round(this.state.diff.getMilliseconds() / 10)
      : 0;
    let seconds = diff ? this.state.diff.getSeconds() : 0;
    let minutes = diff ? this.state.diff.getMinutes() : 0;
    let hours = diff ? Math.round(this.state.diff.getMinutes() / 60) : 0;
    // let days = diff ? this.state.diff.getMinutes() / 1440 : 0;

    if (hundredths === 100) hundredths = 0;

    return (
      <section className="clock-container">
        {/* <h2 className="clock-numbers">dd:hh:mm:ss</h2> */}
        <h2 className="clock-numbers">
          {this.addZero(hours)}:{this.addZero(minutes)}:{this.addZero(seconds)}:
          {this.addZero(hundredths)}
        </h2>
        <div className="buttons-container">
          <button onClick={this.start} className="play">
            Iniciar
            {/* <i class="bx bx-play"></i> */}
          </button>
          <button onClick={this.stop} className="pause">
            Pausar
            {/* <i class="bx bx-pause"></i> */}
          </button>
          <button onClick={this.reset} className="stop">
            Reiniciar
            {/* <i class="bx bx-stop"></i> */}
          </button>
        </div>
        {/* <p>{this.testLoop().length}</p> */}
      </section>
    );
  }
}
