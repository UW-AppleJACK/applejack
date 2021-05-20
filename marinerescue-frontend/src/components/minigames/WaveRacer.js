import React from 'react';

class WaveRacer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      gameLoopId: null,
      prevTime: null,
    };
  }

  componentDidMount() {
    this.startGameLoop();
  }

  componentWillUnmount() {
    this.stopGameLoop();
  }

  startGameLoop() {
    if (this.state.gameLoopId === null) {
      const timestamp = window.performance.now();
      this.continueGameLoop(timestamp);
    }
  }

  continueGameLoop(timestamp) {
    const gameLoopId = window.requestAnimationFrame(this.gameLoop.bind(this));
    this.setState({
      gameLoopId: gameLoopId,
      prevTime: timestamp,
    });
  }

  stopGameLoop() {
    window.cancelAnimationFrame(this.state.gameLoopId);
    this.setState({
      gameLoopId: null,
    });
  }

  gameLoop(time) {
    const deltaTime = time - this.state.prevTime;
    const deltaTimeFrac = deltaTime / 1000;
    console.log(time, this.state.prevTime, deltaTime);
    this.setState({
      num: this.state.num + deltaTimeFrac * 1,
    });
    this.continueGameLoop(time);
  }

  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        {/* <button onClick={this.props.toNext}>Next</button> */}
      </div>
    );
  }
}

export default WaveRacer;