import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './GameLandingPage.scss';
import MODULES from '../data/Modules';

class GameLandingPage extends React.Component {
    renderModules() {
        return (
            <>
                {
                    MODULES.map((module, idx) => {
                        const isAlt = idx % 2 !== 0;
                        const isLocked = idx > 2;

                        let classes = 'game-module-section';
                        if (isAlt) {
                            classes += ' game-module-section-alt';
                        }
                        if (isLocked) {
                            classes += ' game-module-section-locked';
                        }

                        return (
                            <div className={classes} key={idx}>
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
                                        <button className={isLocked ? 'disabled' : 'sunshine'}>{isLocked ? 'Locked' : 'Play Now'}</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </>
        );
    }

    render() {
        return (
            <div id="game-landing-page">
                <NavBar></NavBar>
                <main id="game-map">
                    {this.renderModules()}
                </main>
                
                <div className="section">
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default GameLandingPage;
