import React from 'react';
import Modal from '../Modal';

import './HumphreyNet.scss';

const HUMPHREY_PATH_BASE = '/sprites/sprite-humphrey-net';
const PIECE_PATH_BASE = '/sprites/sprite-humphrey-piece';

class WaveRacer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevTime: null,
      gameLoopId: null,
      timer: 0,
      humphreyProgress: 1,
      showStartModal: true,
      showFailModal: false,
      showWinModal: false,
    };
  }

  componentWillUnmount() {
    this.stopGameLoop();
  }

  startGameLoop() {
    if (this.state.gameLoopId === null) {
      const timestamp = window.performance.now();

      this.setState({
        timer: 0,
        humphreyProgress: 1,
        showFailModal: false,
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
      timer: this.state.timer + deltaTime,
    });

    if (this.state.timer > 5000) {
      this.setState({
        showFailModal: true,
      });
      this.stopGameLoop();
    }
    else {
      this.continueGameLoop(time);
    }
  }

  onHumphreyNextStep() {
    if (this.state.humphreyProgress < 4) {
      this.setState({
        humphreyProgress: this.state.humphreyProgress + 1,
      });
    }
    if (this.state.humphreyProgress >= 3) {
      this.stopGameLoop();
      this.setState({
        showWinModal: true,
      });
    }
  }

  render() {
    return (
      <div id="humphrey-net">
        <Modal
          show={this.state.showStartModal}
          textTitle="Cut Humphrey's net!"
          textPrimary="Humphrey is stuck in a net! Remove parts of the net one at a time. Be quick before you run out of air!"
          primaryButtonText="Play!"
          onClickPrimaryButton={() => {
            this.startGameLoop();
            this.setState({ showStartModal: false });
          }} />
          <Modal
            show={this.state.showFailModal}
            textTitle="Better Luck Next Time"
            textPrimary="Be careful to not run out of air!"
            textSecondary="Do you want to try again?"
            primaryButtonText="Yes, go again!"
            onClickPrimaryButton={this.startGameLoop.bind(this)}
            secondaryButtonText="No thanks"
            onClickSecondButton={this.props.toNext} />
          <Modal
            show={this.state.showWinModal}
            textTitle="Awesome job!"
            textPrimary="You've cut all of the net in time!"
            textSecondary="Humphrey can now safely dive in the water."
            imageUrl="/sprites/sprite-humphrey-blush-small.png"
            imageAlt="Humphrey the whale with a heart symbol above his head"
            primaryButtonText="Continue"
            onClickPrimaryButton={this.props.toNext} />
        <div id="humphrey-net-main">
          <div id="humphrey-net-scene">
            <img
              src={`${HUMPHREY_PATH_BASE}-${this.state.humphreyProgress}.png`}
              onClick={this.onHumphreyNextStep.bind(this)}
              alt="Humphrey stuck in a net" />
          </div>

          <div id="humphrey-net-sidebar">
            <p>Air Tank</p>
            <div id="humphrey-net-air">
              {
                [5, 4, 3, 2, 1].map(num => (
                  <img key={num}
                    src={this.state.timer / 1000 < num ? '/sprites/sprite-airbubble.png' : '/sprites/sprite-airbubble-depleted.png'} />
                ))
              }
            </div>
            <p>Net Parts</p>
            <div id="humphrey-net-pieces">
              {
                [1, 2, 3].map(piece => (
                  <img key={piece}
                    alt={`Piece ${piece} stuck on Humphrey`}
                    src={`${PIECE_PATH_BASE}-${this.state.humphreyProgress > piece ? piece : piece + '-dark'}.png`} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WaveRacer;