import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link, withRouter } from "react-router-dom";

import './GameLandingPage.scss';

import MODULES from '../data/Modules';

class GameLandingPage extends React.Component {
  renderModules() {
    const next = (new URLSearchParams(this.props.location.search)).get('next');
    return (
      <>
        {
          MODULES.map((module, idx) => {
            const isAlt = idx % 2 !== 0;
            const isLocked = idx === 5;
            const isNext = module.tag === next;

            let classes = 'game-module-section';
            if (isAlt) {
              classes += ' game-module-section-alt';
            }
            if (isLocked) {
              classes += ' game-module-section-locked';
            }
            if (isNext) {
              classes += ' game-module-section-next';
            }

            return (
              <div className={classes} key={idx}>
                <a id={module.tag} class="anchor" />
                <div className="module-deco">
                  {
                    module.icon
                    && <img src={module.icon} alt={`Icon for ${module.title} module`} />
                  }
                </div>
                <div className="module-box-container">
                  <div className="module-box">
                    <h2>{module.title}</h2>
                    <p>{module.subtitle}</p>
                    {
                      isLocked
                        ? <button className="std-btn disabled" to={module.target} disabled>Locked</button>
                        : <Link className="std-btn sunshine" to={module.target}>Play Now</Link>
                    }
                  </div>
                </div>
              </div>
            );
          })
        }
      </>
    );
  }

  componentDidMount() {
    const next = (new URLSearchParams(this.props.location.search)).get('next');
    if (!!next) {
      window.location.hash = next;
    }
  }

  render() {
    return (
      <div id="game-landing-page">
        <NavBar></NavBar>
        <main id="game-map-container">
          <div id="game-map">
            {this.renderModules()}
            <div className="game-module-section game-module-section-alt">
              <a id="more" class="anchor" />
              <div className="module-deco">
              </div>
              <div className="module-box-container">
                <div className="module-box">
                  <h2>More...</h2>
                  <p></p>
                  <Link className="std-btn sunshine" to="/journal">See your Journal</Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="section">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default withRouter(GameLandingPage);
