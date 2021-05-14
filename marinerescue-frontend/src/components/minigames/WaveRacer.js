import React from 'react';
import './WaveRacer.scss';
import boat from './sprites/sprite-boat.png';
import wave from './sprites/sprite-wave.png';
import log from './sprites/sprite-log.png';
import lighter from './sprites/sprite-lighter.png';
import strawberry from './sprites/sprite-strawberry.png';

const SPEED = 10;
const OBSTACLES = ["boat", "log", "wave"]

class WaveRacer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGameStarted: true,
        isGameOver: false,
        time_start: 0,
        time_since_last_obstacle: 0,
        obstacles: [],
        strawberryX: -1,
      }
      this.spawnObstacle = this.spawnObstacle.bind(this);
      console.log(this.state.obstacle_type, "is at", this.state.obstacleX)
    }

    spawnObstacle() {
        let obstacle = OBSTACLES[Math.floor(Math.random() * OBSTACLES.length)]
        console.log(obstacle);
        const xPos = Math.floor(Math.random() * 50) + 25;
        const newObstacle = {
            'type': obstacle,
            'x': xPos,
            'y': 0,
        };

        const newObstacles = JSON.parse(JSON.stringify(this.state.obstacles));
        newObstacles.push(newObstacle);

        this.setState({
            obstacles: newObstacles
        });
    }

    renderSprites() {
        return (
            <>
                {
                    this.state.obstacles.map((obstacle, idx) => {
                        return (
                            <img
                                key={idx}
                                class="obstacle"
                                style={{
                                    left: `${obstacle.x}%`,
                                    bottom: `${obstacle.y}%`,
                                }}
                                src={`/sprites/sprite-${obstacle.type}.png`} 
                                alt={`Obstacle ${obstacle.type}`} />
                        );
                    })
                }
            </>
        );
    }

    rndX(offset) {
        return Math.floor(Math.random() * (window.innerWidth - offset));
    }

    start() {
        return (
            <div id="start">
                <div class="jumbotron">
                    <h1 class="display-4">Wave Racer</h1>
                        <p>Reach the <span id="emphasis">pink lighter</span> before Squawky!</p>
                        <p>Avoid boats and wooden poles.</p>
                        <p>Ride on waves to go faster!</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">Play!</a>
                    </p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="text-center" id="wave-racer">
                <button onClick={this.spawnObstacle}>Spawn Obstacle</button>
                <div className="wave-racer-container">
                    <div className="wave-racer-view">
                        {this.renderSprites()}
                    </div>

                    {/* <button onClick={this.props.toNext}>Next</button> */}
                    <div id="minimap">
                        <p>Reach the <span id="emphasis">pink lighter</span> before Squawky!</p>
                        <div id="obstacle">
                            <img src={boat} alt="A boat"/>
                        </div>
                        <div id="obstacle">
                            <img src={wave} alt="A wave"/>
                        </div>
                        <div id="obstacle-log">
                            <img src={log} alt="A wooden log"/>
                        </div>
                        <div id="obstacle">
                            <img src={strawberry} alt="Strawberry the Seal"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WaveRacer;