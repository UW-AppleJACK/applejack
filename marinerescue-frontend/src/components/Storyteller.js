// Storyteller: Keeps track of game state, manages save/load, and displays current scene
// See documentation in /docs/StorytellerDataFormat.md

import React from 'react';
import { withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';
import ComicView from './ComicView';
import minigames from './minigames';
import STORYTELLER_DATA from '../data/StorytellerData';
import './Storyteller.scss';

const STORYTELLER_COOKIE = 'storytellerCookie';
// Unix epoch time 32-bit int limit
const COOKIE_EXP = '2038-01-19T03:14:08+00:00';
// Keys to save to cookies
const STATE_KEYS_SAVE = ['stateFormatVersion', 'currentScene', 'sceneHistory', 'complete'];

let cookies = null;

class Storyteller extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState(props.startScene);
    }

    // Get default game state
    getDefaultState(startScene) {
        return {
            stateFormatVersion: 0,
            currentScene: `${startScene || 'testScene'}/0`,
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

        if (this.getCurrentScene().type !== 'minigame' && oldSceneFrame + 1 < STORYTELLER_DATA[oldSceneName].frames.length) {
            // Transition to new frame in same scene
            this.setState({
                currentScene: `${oldSceneName}/${oldSceneFrame + 1}`,
            });
        }
        else {
            newSceneName = STORYTELLER_DATA[oldSceneName].nextScene;
            console.log(newSceneName)
            if (newSceneName.substring(0, 4) === 'GOTO') {
                // Transition to another webpage
                const destination =  newSceneName.split(' ')[1];
                this.props.history.push(destination);
                return;
            }
            else {
                // Transition to a new scene
                // Next line of code makes this case insensitive due to a bug in the editor
                newSceneName = Object.keys(STORYTELLER_DATA).find(key => key.toLowerCase() === newSceneName.toLowerCase())
                this.setState({
                    currentScene: `${newSceneName}/0`,
                });
            }
        }

        // Clear history before and after minigames to avoid weird UX
        if (STORYTELLER_DATA[oldSceneName].type === 'minigame' || (!!newSceneName && STORYTELLER_DATA[newSceneName].type === 'minigame')) {
            this.setState({
                sceneHistory: [],
            });
        }
    }

    // Go to the next scene after a decision
    toNextByDecision(newSceneName) {
        // Transition to a new scene
        // Next line of code makes this case insensitive due to a bug in the editor
        const correctedNewSceneName = Object.keys(STORYTELLER_DATA).find(key => key.toLowerCase() === newSceneName.toLowerCase());
        this.setState({
            currentScene: `${correctedNewSceneName}/0`,
            sceneHistory: [],
        });
    }

    // Get current game scene
    getCurrentScene() {
        const [sceneName] = this.getParsedSceneAttrs();
        return STORYTELLER_DATA[sceneName];
    }

    // Get data about the current game state required for `ComicView`
    getCurrentComicViewData() {
        const [sceneName, sceneFrame] = this.getParsedSceneAttrs();
        const currentScene = this.getCurrentScene();

        let currentDialogue = null;
        if (sceneFrame !== -1 && 'dialogue' in currentScene) {
            currentDialogue = currentScene.dialogue[sceneFrame];
        }

        let currentDecision = null;
        if (sceneFrame === currentScene.frames.length - 1 && typeof(currentScene.nextScene) !== 'string') {
            currentDecision = currentScene.nextScene;
        }

        return {
            sceneName,
            background: currentScene.background,
            frame: [
                ...(currentScene.baseFrame || []),
                ...currentScene.frames[sceneFrame]
            ],
            dialogue: currentDialogue,
            decision: currentDecision,
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
                    frame={this.getCurrentComicViewData().frame}
                    dialogue={this.getCurrentComicViewData().dialogue}
                    decision={this.getCurrentComicViewData().decision}
                    onDecisionClickListener={this.toNextByDecision.bind(this)} />
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
                    this.getCurrentScene().type !== 'minigame' && this.getCurrentComicViewData().decision === null && 
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
                {/* {this.renderStateTools()} */}
                {this.renderNavigation()}
            </div>
        );
    }
}

export default withRouter(Storyteller);