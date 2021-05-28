import React from 'react';
import Modal from '../Modal';

import './WaveRacer.scss';

const STRAWBERRY_SPEED = 3;
const SQUAWKY_SPEED = 1.5;

const OBSTACLE_DATA = {
  'boat': {
    start: () => ({
      imageUrl: 'boat',
      x: -30,
      y: Math.floor(50 * Math.random()),
      size: 30,
      speed: Math.floor(10 * Math.random() + 10),
    }),
    update: (obstacleState, deltaTimeFrac) => ({
      ...obstacleState,
      x: obstacleState.x + obstacleState.speed * deltaTimeFrac,
      y: obstacleState.y + obstacleState.speed * deltaTimeFrac,
    }),
  },
  'boat-flip': {
    start: () => ({
      imageUrl: 'boat-flip',
      x: 100,
      y: Math.floor(50 * Math.random()),
      size: 30,
      speed: Math.floor(10 * Math.random() + 10),
    }),
    update: (obstacleState, deltaTimeFrac) => ({
      ...obstacleState,
      x: obstacleState.x + -obstacleState.speed * deltaTimeFrac,
      y: obstacleState.y + obstacleState.speed * deltaTimeFrac,
    }),
  },
  'log': {
    start: () => ({
      imageUrl: 'log-2',
      x: Math.floor(100 * Math.random()),
      y: -20,
      size: 8,
      speed: Math.floor(30 * Math.random() + 15),
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
      showStartModal: true,
      showEndModal: false,
      playerX: 45,
      strawberryProgress: 0,
      squawkyProgress: 20,
    };
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
      // Run update on all sprites
      sprites: this.state.sprites.map(sprite => sprite.update(sprite, deltaTimeFrac)),

      // Make progress
      squawkyProgress: this.state.squawkyProgress + SQUAWKY_SPEED * deltaTimeFrac,
      strawberryProgress: this.state.strawberryProgress + STRAWBERRY_SPEED * deltaTimeFrac,
    })

    if (this.state.lastObstacleSpawnTime < time - 2500) {
      this.spawnRandomObstacle();

      this.setState({
        lastObstacleSpawnTime: time,
      });
    }

    if (this.state.squawkyProgress >= 100 || this.state.strawberryProgress >= 100) {
      this.setState({
        showEndModal: true,
      });
      this.stopGameLoop();
    }
    else {
      this.continueGameLoop(time);
    }
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

  getPlayerSprite() {
    return {
      imageUrl: 'strawberry-vertical',
      x: this.state.playerX,
      y: 80,
      size: 10,
    }
  }

  movePlayer(dir) {
    let newX;
    if (dir === 'left') {
      newX = Math.max(this.state.playerX - 10, 0);
    }
    else {
      newX = Math.min(this.state.playerX + 10, 90);
    }

    this.setState({
      playerX: newX,
    });
  }

  renderSprites() {
    return (
      <>
        {
          this.state.sprites.map(this.renderSprite)
        }
      </>
    )
  }

  renderSprite(sprite, idx) {
    return (
      <img
        key={idx}
        src={`/sprites/sprite-${sprite.imageUrl}.png`}
        style={{
          left: `${sprite.x}%`,
          top: `${sprite.y}%`,
          width: `${sprite.size}%`,
        }} />
    );
  }

  render() {
    return (
      <div id="wave-racer">
        <Modal
          show={this.state.showStartModal}
          textTitle="Reach the pink lighter before Squawky!"
          textPrimary="Move left and right to avoid boaters and wooden poles."
          primaryButtonText="Play!"
          onClickPrimaryButton={() => {
            this.startGameLoop();
            this.setState({ showStartModal: false });
          }} />
          <Modal
            show={this.state.showEndModal}
            textTitle="Great job!"
            textPrimary="You reached the pink lighter before Squawky, saving him from harm!"
            primaryButtonText="Continue"
            onClickPrimaryButton={this.props.toNext} />
        <div id="wave-racer-main">
          <div id="wave-racer-scene">
            {this.renderSprites()}
            {this.renderSprite(this.getPlayerSprite())}
          </div>

          <div id="wave-racer-minimap">
            <p>
              Reach the <span>Pink Lighter</span> before Squawky!
            </p>
            <img id="wave-racer-minimap-lighter" src="/sprites/sprite-lighter.png" alt="Lighter" />
            <div id="wave-racer-minimap-main">
              <div id="wave-racer-minimap-vertical-dotted-line"></div>
              <img
                id="wave-racer-minimap-strawberry"
                src="/sprites/sprite-strawberry.png"
                style={{ bottom: `${this.state.strawberryProgress}%` }}
                alt={`Strawberry is ${this.state.strawberryProgress}% of the way there`} />
              <img
                id="wave-racer-minimap-squawky"
                src="/sprites/sprite-sqwackyv2-fly.png"
                style={{ bottom: `${this.state.squawkyProgress}%` }}
                alt={`Squawky is ${this.state.squawkyProgress}% of the way there`} />
            </div>
          </div>
        </div>
        <div id="wave-racer-controls">
          <button onClick={() => this.movePlayer('left')} className="std-btn"><span className="material-icons-outlined">west</span> <span>Move Left</span></button>
          <button onClick={() => this.movePlayer('right')} className="std-btn"><span>Move Right</span> <span className="material-icons-outlined">east</span></button>
        </div>
        {/* <button onClick={this.props.toNext}>Next</button> */}
      </div>
    );
  }
}

export default WaveRacer;