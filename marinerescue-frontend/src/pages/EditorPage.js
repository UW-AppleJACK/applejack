import React from 'react';

import minigames from '../components/minigames';
import Dropdown from '../components/Dropdown';
import ComicView from '../components/ComicView';
import './EditorPage.scss';

const IMAGES = {
    backgrounds: [
        'test-1',
        'test-2',
    ],
    sprites: [
        'strawberry',
    ],
};

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
};

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storytellerData: TEST2,
            currentSceneName: 'testScene',
            currentFrame: 0,
        };
    }

    // Get current game scene
    getCurrentScene() {
        return this.state.storytellerData[this.state.currentSceneName];
    }

    // Get data about the current game state required for `ComicView`
    getCurrentComicViewData() {
        const sceneName = this.state.currentSceneName;
        const sceneFrame = this.state.currentFrame;
        const currentScene = this.getCurrentScene();
        return {
            sceneName,
            background: currentScene.background,
            frame: [
                ...(currentScene.baseFrame || []),
                ...(currentScene.frames[sceneFrame] || [])
            ],
        };
    }

    // Update current scene with new attributes
    updateCurrentSceneAttributes(newSceneAttributes) {
        this.setState({
            storytellerData: {
                ...this.state.storytellerData,
                [this.state.currentSceneName]: {
                    ...this.state.storytellerData[this.state.currentSceneName],
                    ...newSceneAttributes
                }
            }
        });
    }

    // render scene editor view
    renderSceneEditor() {
        // Update current scene with new type
        const updateSceneType = (newSceneType) => {
            if (newSceneType === 'minigame' && !this.getCurrentScene().minigame) {
                this.updateCurrentSceneAttributes({
                    type: newSceneType,
                    minigame: 'DemoMinigame',
                });
            }
            else if (newSceneType === 'comic' && !this.getCurrentScene().background) {
                this.updateCurrentSceneAttributes({
                    background: 'test-1',
                    baseFrame: [],
                    frames: [],
                });
            }
            else {
                this.updateCurrentSceneAttributes({
                    type: newSceneType,
                });
            }
        }

        // Update current scene with new minigame
        const updateSceneMinigame = (newMinigame) => {
            this.updateCurrentSceneAttributes({ minigame: newMinigame });
        }

        // Update current scene with new background
        const updateSceneBackground = (newBackground) => {
            this.updateCurrentSceneAttributes({ background: newBackground });
        }

        // Update current scene with new nextScene
        const updateSceneNext = (newNextScene) => {
            this.updateCurrentSceneAttributes({ nextScene: newNextScene });
        }

        return (
            <div className="attrs-section editor-section">
                <h2>Scene Attrs</h2>
                <div className="attr">
                    <label htmlFor="scene-type">Scene Type</label>
                    <Dropdown
                        id="scene-type"
                        options={['Comic', 'Minigame']}
                        onChange={updateSceneType.bind(this)}
                        selected={this.getCurrentScene().type} />
                </div>

                <div className="attr">
                    <label htmlFor="scene-type">Next Scene</label>
                    <Dropdown
                        id="scene-type"
                        options={Object.keys(this.state.storytellerData)}
                        onChange={updateSceneNext.bind(this)}
                        selected={this.getCurrentScene().nextScene} />
                </div>

                {
                    this.getCurrentScene().type === 'minigame' &&
                        <>
                            <div className="attr">
                                <label htmlFor="minigame-type">Minigame</label>
                                <Dropdown
                                    id="minigame-type"
                                    options={Object.keys(minigames)}
                                    onChange={updateSceneMinigame.bind(this)}
                                    selected={this.getCurrentScene().minigame} />
                            </div>
                        </>
                }

                {
                    this.getCurrentScene().type === 'comic' &&
                        <>
                            <div className="attr">
                                <label htmlFor="background-type">Background</label>
                                <Dropdown
                                    id="background-type"
                                    options={IMAGES.backgrounds}
                                    onChange={updateSceneBackground.bind(this)}
                                    selected={this.getCurrentScene().background} />
                            </div>
                        </>
                }
            </div>
        );
    }

    // Render Scene selection view
    renderSceneSelection() {
        // Sets the current scene
        const setCurrentSceneNameCallback = (newSceneName) => {
            this.setState({
                currentSceneName: newSceneName,
                currentFrame: 0,
            });
        }

        // Add new scene
        const addNewScene = () => {
            const newSceneName = window.prompt('Enter new scene name');
            this.setState({
                storytellerData: {
                    ...this.state.storytellerData,
                    [newSceneName]: {
                        type: 'comic',
                        background: 'test-1',
                        nextScene: 'testScene2',
                        baseFrame: [],
                        frames: []
                    }
                }
            });
        }

        return (
            <div className="selector-section editor-section">
                <h2>Scenes</h2>
                <div className="selector-scroll">
                    {
                        Object.keys(this.state.storytellerData).map((sceneName, idx) => (
                            <div className={`selection ${this.state.currentSceneName === sceneName ? 'selected' : ''}`} key={idx}>
                                <button
                                    className="selection-primary"
                                    onClick={() => setCurrentSceneNameCallback.bind(this)(sceneName)}
                                >
                                    {sceneName}
                                </button>
                            </div>
                        ))
                    }

                    <div className="selection">
                        <button className="selection-primary" onClick={() => addNewScene.bind(this)()}>Add New Scene</button>
                    </div>
                </div>
            </div>
        );
    }

    // Render Frame selection view
    renderFrameSelection() {
        // Sets the current frame
        const setCurrentFrameCallback = (newFrameIdx) => {
            this.setState({
                currentFrame: newFrameIdx,
            });
        }

        // Adds a new frame with particular content
        const addNewFrame = (newFrameContent) => {
            this.setState({
                storytellerData: {
                    ...this.state.storytellerData,
                    [this.state.currentSceneName]: {
                        ...this.state.storytellerData[this.state.currentSceneName],
                        frames: [
                            ...this.state.storytellerData[this.state.currentSceneName].frames,
                            JSON.parse(JSON.stringify(newFrameContent))
                        ]
                    }
                }
            });
        }

        // Deletes a frame
        const deleteFrame = (frameIndex) => {
            const confirmed = window.confirm(`Delete frame ${frameIndex}?`)
            if (!confirmed) return;
            let newFrames = JSON.parse(JSON.stringify(this.getCurrentScene().frames));
            newFrames.splice(frameIndex, 1);
            this.updateCurrentSceneAttributes({ frames: newFrames });
        }

        if (this.getCurrentScene().type === 'minigame') {
            return <div></div>;
        }

        return (
            <div className="selector-section editor-section">
                <h2>Frames</h2>
                <div className="selector-scroll">
                    <div className={`selection ${this.state.currentFrame === -1 ? 'selected' : ''}`}>
                        <button
                            className='selection-primary'
                            onClick={() => setCurrentFrameCallback.bind(this)(-1)}
                        >
                            Base Frame
                        </button>
                    </div>
                    
                    {
                        this.getCurrentScene().frames.map((frame, idx) => (
                            <div className={`selection ${this.state.currentFrame === idx ? 'selected' : ''}`} key={idx}>
                                <button
                                    className="selection-primary"
                                    onClick={() => setCurrentFrameCallback.bind(this)(idx)}
                                >
                                    Frame {idx}
                                </button>

                                <button
                                    className="selection-secondary"
                                    onClick={() => addNewFrame.bind(this)(frame)}
                                >
                                    <span className="material-icons-outlined">content_copy</span>
                                </button>

                                <button
                                    className="selection-secondary"
                                    onClick={() => deleteFrame.bind(this)(idx)}
                                >
                                    <span className="material-icons-outlined">delete</span>
                                </button>
                            </div>
                        ))
                    }

                    <div className="selection">
                        <button className="selection-primary" onClick={() => addNewFrame.bind(this)([])}>Add New Frame</button>
                    </div>
                </div>
            </div>
        );
    }

    // Render Storytelling view (either comic or minigame)
    renderStorytellerView() {
        const currentScene = this.getCurrentScene();
        if (currentScene.type === 'comic') {
            return (
                <ComicView
                    sceneName={this.state.currentSceneName}
                    background={this.getCurrentComicViewData().background}
                    frame={this.getCurrentComicViewData().frame} />
            );
        }
        else if (currentScene.type === 'minigame') {
            return <p>Minigame {this.getCurrentScene().minigame} cannot be previewed</p>;
        }
        else {
            return <div></div>;
        }
    }

    render() {
        return (
            <div id="storyteller" className="editor-page">
                <div className="editor-pane">
                    
                </div>
                <div id="storyteller-view">
                    {this.renderStorytellerView()}
                </div>
                <div className="editor-pane">
                    {this.renderSceneSelection()}
                    {this.renderFrameSelection()}
                    {this.renderSceneEditor()}
                </div>
            </div>
        );
    }
}

export default HomePage;