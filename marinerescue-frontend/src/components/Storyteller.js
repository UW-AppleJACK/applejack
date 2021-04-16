// Storyteller: Keeps track of game state, manages save/load, and displays current scene
// See documentation in /docs/StorytellerDataFormat.md

import React from 'react';
import Cookies from 'universal-cookie';
import ComicView from './ComicView';
import minigames from './minigames';
import './Storyteller.scss';

const STORYTELLER_COOKIE = 'storytellerCookie';
// Unix epoch time 32-bit int limit
const COOKIE_EXP = '2038-01-19T03:14:08+00:00';
// Keys to save to cookies
const STATE_KEYS_SAVE = ['stateFormatVersion', 'currentScene', 'sceneHistory', 'complete'];

let cookies = null;

const TEST2 = {
    testScene: {
        type: 'comic',
        background: 'test-1',
        nextScene: 'testScene2',
        baseFrame: [
            {
                type: 'sprite',
                image: 'strawberry',
                x: 5,
                y: 5,
                size: 8,
            },
        ],
        frames: [
            [
                {
                    id: 1,
                    type: 'sprite',
                    image: 'strawberry',
                    x: 40,
                    y: 40,
                    size: 20,
                },
                {
                    type: 'sprite',
                    image: 'strawberry',
                    x: 80,
                    y: 80,
                    size: 8.3,
                    flipX: true,
                },
            ],
            [
                {
                    id: 1,
                    type: 'sprite',
                    image: 'strawberry',
                    x: 20,
                    y: 20,
                    size: 40,
                },
                {
                    type: 'sprite',
                    image: 'strawberry',
                    x: 80,
                    y: 80,
                    size: 8.3,
                    flipX: true,
                },
            ],
        ]
    },
    testScene2: {
        type: 'comic',
        background: 'test-2',
        nextScene: 'testMinigame',
        frames: [
            [
                {
                    id: 1,
                    type: 'sprite',
                    image: 'strawberry',
                    x: 40,
                    y: 40,
                    size: 20,
                },
                {
                    type: 'sprite',
                    image: 'strawberry',
                    x: 80,
                    y: 80,
                    size: 8.3,
                    flipX: true,
                },
            ],
            [
                {
                    id: 1,
                    type: 'sprite',
                    image: 'strawberry',
                    x: 20,
                    y: 20,
                    size: 20,
                },
                {
                    type: 'sprite',
                    image: 'strawberry',
                    x: 30,
                    y: 80,
                    size: 8.3,
                    flipX: true,
                },
            ],
        ]
    },
    testMinigame: {
        type: 'minigame',
        nextScene: 'testScene',
        minigame: 'DemoMinigame',
    },
}

class Storyteller extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
    }

    // Get default game state
    getDefaultState() {
        return {
            stateFormatVersion: 0,
            currentScene: 'testScene/0',
            sceneHistory: [],
            complete: [],
        };
    }

    // Load game state from cookies
    loadStateFromCookie() {
        cookies = cookies || new Cookies();
        this.setState(cookies.get(STORYTELLER_COOKIE));
    }

    // Save game state to cookies
    saveStateToCookie() {
        cookies = cookies || new Cookies();

        const stateToSave = {};
        STATE_KEYS_SAVE.forEach(key => {
            stateToSave[key] = this.state[key];
        });

        cookies.set(STORYTELLER_COOKIE, stateToSave, {
            path: '/',
            expires: new Date(COOKIE_EXP),
        });
    }

    // Get [sceneName, sceneFrame] for the current state of the game
    getParsedSceneAttrs() {
        const [sceneName, sceneFrameRaw] = this.state.currentScene.split('/');
        const sceneFrame = parseInt(sceneFrameRaw);
        return [sceneName, sceneFrame];
    }

    // Go back in the game history
    toPrev() {
        this.setState({
            currentScene: this.state.sceneHistory[this.state.sceneHistory.length - 1],
            sceneHistory: this.state.sceneHistory.slice(0, -1),
        });
    }

    // Go to the next frame or scene
    toNext() {
        const [oldSceneName, oldSceneFrame] = this.getParsedSceneAttrs();
        let newSceneName;

        this.setState({
            sceneHistory: [...this.state.sceneHistory, this.state.currentScene],
        });

        if (this.getCurrentScene().type !== 'minigame' && oldSceneFrame + 1 < TEST2[oldSceneName].frames.length) {
            this.setState({
                currentScene: `${oldSceneName}/${oldSceneFrame + 1}`,
            });
        }
        else {
            newSceneName = TEST2[oldSceneName].nextScene;
            this.setState({
                currentScene: `${newSceneName}/0`,
            });
        }

        // Clear history before and after minigames to avoid weird UX
        if (TEST2[oldSceneName].type === 'minigame' || (!!newSceneName && TEST2[newSceneName].type === 'minigame')) {
            this.setState({
                sceneHistory: [],
            });
        }
    }

    // Get current game scene
    getCurrentScene() {
        const [sceneName] = this.getParsedSceneAttrs();
        return TEST2[sceneName];
    }

    // Get data about the current game state required for `ComicView`
    getCurrentComicViewData() {
        const [sceneName, sceneFrame] = this.getParsedSceneAttrs();
        const currentScene = this.getCurrentScene();
        return {
            sceneName,
            background: currentScene.background,
            frame: [
                ...(currentScene.baseFrame || []),
                ...currentScene.frames[sceneFrame]
            ],
        };
    }

    // Render Storytelling view (either comic or minigame)
    renderStorytellerView() {
        const currentScene = this.getCurrentScene();
        if (currentScene.type === 'comic') {
            return (
                <ComicView
                    sceneName={this.getCurrentComicViewData().sceneName}
                    background={this.getCurrentComicViewData().background}
                    frame={this.getCurrentComicViewData().frame} />
            );
        }
        else if (currentScene.type === 'minigame') {
            const MinigameTag = minigames[currentScene.minigame];
            return <MinigameTag toNext={this.toNext.bind(this)} />;
        }
        else {
            return <div></div>;
        }
    }

    // Render load/save UI
    renderStateTools() {
        return (
            <>
                <button className="storyteller-load" onClick={this.loadStateFromCookie.bind(this)}>
                    <span className="material-icons-outlined">restore</span>
                </button>
                <button className="storyteller-save" onClick={this.saveStateToCookie.bind(this)}>
                    <span className="material-icons-outlined">save</span>
                </button>
            </>
        );
    }

    // Render navigation UI
    renderNavigation() {
        return (
            <>
                {
                    this.state.sceneHistory.length > 0 &&
                    <button className="storyteller-page-turn storyteller-page-prev" onClick={this.toPrev.bind(this)}>
                        <span className="material-icons-outlined">west</span>
                    </button>
                }
                {
                    this.getCurrentScene().type !== 'minigame' &&
                    <button className="storyteller-page-turn storyteller-page-next" onClick={this.toNext.bind(this)}>
                        <span className="material-icons-outlined">east</span>
                    </button>
                }
            </>
        );
    }

    render() {
        return (
            <div id="storyteller" style={{ textAlign: 'center' }}>
                <div id="storyteller-view">
                    {this.renderStorytellerView()}
                </div>
                {this.renderStateTools()}
                {this.renderNavigation()}
            </div>
        );
    }
}

export default Storyteller;