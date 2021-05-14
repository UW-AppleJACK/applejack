import React from 'react';
import './WaveRacer.scss';
import boat from './sprites/sprite-boat.png';
import wave from './sprites/sprite-wave.png';
import log from './sprites/sprite-log.png';
import lighter from './sprites/sprite-lighter.png';
import strawberry from './sprites/sprite-strawberry.png';

const SPEED = 10;
const { height, width } = useWindowDimensions();

class WaveRacer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGameStarted: true,
        isGameOver: false,
        time_start: "",
        time_since_last_obstacle: "",
        obstacle_type: "boat",
        obstacleX: "200px",
        obstacleY: "0px",
        strawberryX: -1,
      }
      this.spawnObstacle = this.spawnObstacle.bind(this);
      console.log(this.state.obstacle_type, "is at", this.state.obstacleX)
    }

    spawnObstacle() {
        let OBSTACLES = ["boat", "log", "wave"]
        let obstacle = OBSTACLES[Math.floor(Math.random() * OBSTACLES.length)]
        console.log(obstacle);
        this.setState({
                "obstacle_type": obstacle,
                "obstacleX": "100px",
                "obstacleY": "0px"
            });
    }

    renderSprite() {
        return(
            <img class="obstacle" src={{obstacle}}/>
        )
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
            <div className="text-center">
                <button onClick={this.spawnObstacle}>Spawn Obstacle</button>

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
        );
    }
}

export default WaveRacer;