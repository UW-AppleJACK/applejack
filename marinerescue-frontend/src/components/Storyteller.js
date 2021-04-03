import React from 'react';
import Cookies from 'universal-cookie';
import ComicView from './ComicView/ComicView';
import './Storyteller.scss';

const STORYTELLER_COOKIE = 'storytellerCookie';
// Unix epoch time 32-bit int limit
const COOKIE_EXP = '2038-01-19T03:14:08+00:00';
// Keys to save to cookies
const STATE_KEYS_SAVE = ['currentScene', 'sceneHistory'];

let cookies = null;

const TEST2 = {
    testScene: {
        type: 'comic',
        background: 'test-1',
        nextScene: 'testScene2',
        frames: [
            [
                {
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
                    size: 5.3,
                    flipX: true,
                },
            ],
            [
                {
                    type: 'sprite',
                    image: 'strawberry',
                    x: 20,
                    y: 20,
                    size: 20,
                },
                {
                    type: 'sprite',
                    image: 'strawberry',
                    x: 80,
                    y: 80,
                    size: 5.3,
                    flipX: true,
                },
            ],
        ]
    },
    testScene2: {
        type: 'comic',
        background: 'test-2',
        nextScene: 'testScene',
        frames: [
            [
                {
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
                    size: 5.3,
                    flipX: true,
                },
            ],
            [
                {
                    type: 'sprite',
                    image: 'strawberry',
                    x: 20,
                    y: 20,
                    size: 20,
                },
                {
                    type: 'sprite',
                    image: 'strawberry',
                    x: 80,
                    y: 80,
                    size: 5.3,
                    flipX: true,
                },
            ],
        ]
    }
}

class Storyteller extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
    }

    getDefaultState() {
        return {
            currentScene: 'testScene/0',
            sceneHistory: [],
            complete: [],
        };
    }

    loadStateFromCookie() {
        cookies = cookies || new Cookies();
        this.setState(cookies.get(STORYTELLER_COOKIE));
    }

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

    getParsedSceneAttrs() {
        const [sceneName, sceneFrameRaw] = this.state.currentScene.split('/');
        const sceneFrame = parseInt(sceneFrameRaw);
        return [sceneName, sceneFrame];
    }

    toPrev() {
        this.setState({
            currentScene: this.state.sceneHistory[this.state.sceneHistory.length - 1],
            sceneHistory: this.state.sceneHistory.slice(0, -1),
        });
    }

    toNext() {
        const [sceneName, sceneFrame] = this.getParsedSceneAttrs();

        this.setState({
            sceneHistory: [...this.state.sceneHistory, this.state.currentScene],
        });

        if (sceneFrame + 1 < TEST2[sceneName].frames.length) {
            this.setState({
                currentScene: `${sceneName}/${sceneFrame + 1}`,
            });
        }
        else {
            const newSceneName = TEST2[sceneName].nextScene;
            this.setState({
                currentScene: `${newSceneName}/0`,
            });
        }
    }

    getCurrentComicViewData() {
        const [sceneName, sceneFrame] = this.getParsedSceneAttrs();
        const currentScene = TEST2[sceneName];
        return {
            background: currentScene.background,
            frame: currentScene.frames[sceneFrame],
        };
    }

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

    renderNavigation() {
        return (
            <>
                {
                    this.state.sceneHistory.length > 0 &&
                    <button className="storyteller-page-turn storyteller-page-prev" onClick={this.toPrev.bind(this)}>
                        <span className="material-icons-outlined">west</span>
                    </button>
                }
                <button className="storyteller-page-turn storyteller-page-next" onClick={this.toNext.bind(this)}>
                    <span className="material-icons-outlined">east</span>
                </button>
            </>
        );
    }

    render() {
        return (
            <div id="storyteller" style={{ textAlign: 'center' }}>
                <div id="storyteller-view">
                    <ComicView background={this.getCurrentComicViewData().background} frame={this.getCurrentComicViewData().frame} />
                </div>
                {this.renderStateTools()}
                {this.renderNavigation()}
            </div>
        );
    }
}

export default Storyteller;