import React from 'react';

const OBSTACLE_DATA = {
  'boat': {
    start: () => ({
      imageUrl: 'boat',
      x: -30,
      y: 70,
      size: 30,
    }),
    update: (obstacleState, deltaTimeFrac) => ({
      ...obstacleState,
      x: obstacleState.x + 10 * deltaTimeFrac,
    }),
  },
  'log': {
    start: () => ({
      imageUrl: 'log-2',
      x: Math.floor(50 * Math.random()) + 25,
      y: -20,
      size: 8,
    }),
    update: (obstacleState, deltaTimeFrac) => ({
      ...obstacleState,
      y: obstacleState.y + 10 * deltaTimeFrac,
    }),
  },
}

class WaveRacer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      lastObstacleSpawnTime: -1,
      gameLoopId: null,
      prevTime: null,
      sprites: [],
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

      this.setState({
        lastObstacleSpawnTime: timestamp
      });

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

    this.setState({
      num: this.state.num + deltaTimeFrac * 1,
    });

    this.setState({
      sprites: this.state.sprites.map(sprite => sprite.update(sprite, deltaTimeFrac)),
    });

    if (this.state.lastObstacleSpawnTime < time - 5000) {
      this.spawnRandomObstacle();

      this.setState({
        lastObstacleSpawnTime: time,
      });
    }

    this.continueGameLoop(time);
  }

  spawnRandomObstacle() {
    const obstacleKeys = Object.keys(OBSTACLE_DATA);
    const randomObstacleIndex = Math.floor(Math.random() * obstacleKeys.length);
    this.spawnObstacle(obstacleKeys[randomObstacleIndex]);
  }

  spawnObstacle(key) {
    const obstacleData = OBSTACLE_DATA[key];
    const obstacleState = obstacleData.start();
    obstacleState.update = obstacleData.update;
    
    this.setState({
      sprites: [
        ...this.state.sprites,
        obstacleState,
      ],
    });
  }

  renderSprites() {
    return (
      <>
        {
          this.state.sprites.map((sprite, idx) => (
            <img
              key={idx}
              src={`/sprites/sprite-${sprite.imageUrl}.png`}
              style={{
                left: `${sprite.x}%`,
                top: `${sprite.y}%`,
                width: `${sprite.size}%`,
              }} />
          ))
        }
      </>
    )
  }

  render() {
    return (
      <div id="wave-racer">
        <p>{this.state.num}</p>
        <div id="wave-racer-scene">
          {this.renderSprites()}
        </div>
        {/* <button onClick={this.props.toNext}>Next</button> */}
      </div>
    );
  }
}

export default WaveRacer;