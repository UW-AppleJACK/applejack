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
        'buoy-net-marker',
        'fish',
        'fishingline',
        'humphrey-blush',
        'humphrey-sad',
        'humphrey-surprised',
        'humphrey',
        'jade-birds-eye-view',
        'jade-birds-eye-view2',
        'jade-happy',
        'jade-heart',
        'jade-mad',
        'jade-sad',
        'jellyfish-purpleblue',
        'jellyfish-white',
        'squid',
        'sqwacky-blank',
        'sqwacky-doodle',
        'sqwacky-love',
        'sqwacky-mad',
        'sqwacky-surprised',
        'sqwacky-worried',
        'sqwacky',
        'sqwackyv2-BELLY',
        'sqwackyv2-FLY',
        'strawberry',
        'strawberry-love',
        'strawberry-sad',
        'strawberry-surprised',
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
            targetSpriteIdx: -1,
            showInstructions: false,
        };
    }

    // Get current game scene
    getCurrentScene() {
        return this.state.storytellerData[this.state.currentSceneName];
    }

    // Get target sprite
    getTargetSprite() {
        if (this.state.targetSpriteIdx === -1) {
            return null;
        }
        else if (this.state.currentFrame === -1) {
            return this.getCurrentScene().baseFrame[this.state.targetSpriteIdx];
        }
        else {
            return this.getCurrentScene().frames[this.state.currentFrame][this.state.targetSpriteIdx];
        }
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

    // Convert (x, y) screen position to percentage across storyteller view bounds
    posToPerc(x, y) {
        const storytellerBounds = document.getElementById('storyteller-view').getBoundingClientRect();
        const viewLeft = storytellerBounds.left;
        const viewTop = storytellerBounds.top;
        const viewSize = storytellerBounds.width;

        // Round to one decimal
        const percX = Math.floor((x - viewLeft) / viewSize * 1000) / 10;
        const percY = Math.floor((y - viewTop) / viewSize * 1000) / 10;

        return [percX, percY];
    }

    // Set whether the sprite should follow the mouse
    setSpriteFollowMouse(shouldFollowMouse) {
        if(shouldFollowMouse) {
            document.onmousemove = event => {
                if (this.state.targetSpriteIdx === -1) {
                    // If no sprite is targetted, stop following
                    this.setSpriteFollowMouse(false);
                    return;
                }

                const {pageX, pageY} = event;
                const [percX, percY] = this.posToPerc(pageX, pageY);
                this.updateTargetSpriteAttributes({
                    x: percX,
                    y: percY,
                });
            }
        }
        else {
            document.onmousemove = () => {};
        }
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

    // Update target sprite with new attributes
    updateTargetSpriteAttributes(newSpriteAttributes) {
        if (this.state.currentFrame === -1) {
            // Base frame
            // Get clone of current base frame
            const newBaseFrame = JSON.parse(JSON.stringify(this.getCurrentScene().baseFrame));

            newBaseFrame[this.state.targetSpriteIdx] = {
                ...newBaseFrame[this.state.targetSpriteIdx],
                ...newSpriteAttributes
            };

            this.setState({
                storytellerData: {
                    ...this.state.storytellerData,
                    [this.state.currentSceneName]: {
                        ...this.state.storytellerData[this.state.currentSceneName],
                        baseFrame: newBaseFrame,
                    }
                }
            });
        }
        else {
            // Other frames
            // Get clone of current scene frames
            const newFrames = JSON.parse(JSON.stringify(this.getCurrentScene().frames));

            newFrames[this.state.currentFrame][this.state.targetSpriteIdx] = {
                ...newFrames[this.state.currentFrame][this.state.targetSpriteIdx],
                ...newSpriteAttributes
            };

            this.setState({
                storytellerData: {
                    ...this.state.storytellerData,
                    [this.state.currentSceneName]: {
                        ...this.state.storytellerData[this.state.currentSceneName],
                        frames: newFrames,
                    }
                }
            });
        }
    }

    // Export: open window that shows storyteller data as JSON
    export() {
        window.open('', null, 'status=yes,toolbar=no,menubar=no,location=no').document.write('<pre>' +
            JSON.stringify(this.state.storytellerData, null, 2) +
        '</pre>');
    }

    // Import: open dialog to import storyteller data as JSON
    import() {
        const result = prompt("Paste Storyteller data as JSON");
        const obj = JSON.parse(result);
        this.setState({
            storytellerData: obj,
            currentSceneName: 'testScene',
            currentFrame: 0,
            targetSpriteIdx: -1,
        });
    }

    // Get onClickListeners for sprites in current frame
    getCurrentOnClickListeners() {
        const currentScene = this.getCurrentScene();
        const sceneFrame = this.state.currentFrame;
        
        let baseFrameSize = (currentScene.baseFrame || []).length;
        let currentFrameSprites = (currentScene.frames[sceneFrame] || []);

        const onClickListeners = [];

        if (sceneFrame === -1) {
            baseFrameSize = 0;
            currentFrameSprites = (currentScene.baseFrame || []);
        }

        for (let i = 0; i < baseFrameSize; i++) {
            // For all the sprites in the base frame, add a no-op listener
            onClickListeners.push(idx => () => {});
        }

        currentFrameSprites.forEach(sprite => {
            // For all sprites in the current frame, add a callback
            onClickListeners.push(rawIdx => event => {
                const idx = rawIdx - baseFrameSize;
                this.setState({
                    targetSpriteIdx: idx,
                });
                this.setSpriteFollowMouse(false);
                if(event.shiftKey) {
                    this.setSpriteFollowMouse(true);
                }
            });
        });

        return onClickListeners;
    }

    // render editor view for import, export, instructions
    renderEditorPrimarySection() {
        // Toggle instructions visibility
        const toggleInstructions = () => {
            this.setState({ showInstructions: !this.state.showInstructions });
        }
        return (
            <div className="primary-section editor-section">
                <div class="primary-section-btns">
                    <button onClick={this.export.bind(this)}>
                        <span class="material-icons-outlined">file_download</span>
                    </button>
                    <button onClick={this.import.bind(this)}>
                        <span class="material-icons-outlined">file_upload</span>
                    </button>
                    <button onClick={toggleInstructions.bind(this)}>
                        <span class="material-icons-outlined">help_outline</span>
                    </button>
                </div>
                {
                    this.state.showInstructions && 
                        <>
                            <h2>Instructions</h2>
                            <ul>
                                <li>Use scenes and frames sections to navigate game</li>
                                <li>Use attributes sections to edit attributes</li>
                                <li>Click on a sprite to select it for editing</li>
                                <li>Shift+click on a sprite to follow cursor, then click again to drop</li>
                                <li>Don't forget to import/export</li>
                            </ul>
                        </>
                }
            </div>
        )
    }

    // render scene editor view
    renderSceneEditor() {
        // Update current scene with new type
        const updateSceneType = newSceneType => {
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
        const updateSceneMinigame = newMinigame => {
            this.updateCurrentSceneAttributes({ minigame: newMinigame });
        }

        // Update current scene with new background
        const updateSceneBackground = newBackground => {
            this.updateCurrentSceneAttributes({ background: newBackground });
        }

        // Update current scene with new nextScene
        const updateSceneNext = newNextScene => {
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

    // render sprite editor view
    renderSpriteEditor() {
        if (this.state.targetSpriteIdx === -1) {
            return <></>;
        }

        // Toggle target sprite flip X
        const toggleFlipX = () => {
            this.updateTargetSpriteAttributes({ flipX: !this.getTargetSprite().flipX });
        }

        // Update target sprite image
        const updateSpriteImage = newImage => {
            this.updateTargetSpriteAttributes({ image: newImage });
        }

        // Given a sprite property and an optional parser function, returns a onChange listener
        const updateSpriteAttributeFromInput = prop => event => {
            const newValue = event.target.value;
            this.updateTargetSpriteAttributes({ [prop]: newValue || 0 });
        }

        // Deselect target sprite
        const deselectTargetSprite = () => {
            this.setState({ targetSpriteIdx: -1 });
        }

        const targetSprite = this.getTargetSprite();

        return (
            <div className="attrs-section editor-section">
                <h2>Sprite Attrs</h2>

                <button onClick={deselectTargetSprite.bind(this)}>Deselect</button>

                <div className="attr">
                    <label htmlFor="sprite-image">Image</label>
                    <Dropdown
                        id="sprite-image"
                        options={IMAGES.sprites}
                        onChange={updateSpriteImage.bind(this)}
                        selected={targetSprite.image} />
                </div>

                <div className="attr">
                    <label htmlFor="sprite-id">ID (optional)</label>
                    <input type="text"
                        id="sprite-id"
                        value={targetSprite.id || ''}
                        onChange={updateSpriteAttributeFromInput('id').bind(this)} />
                </div>

                <div className="attr">
                    <label htmlFor="sprite-x">X Position</label>
                    <input type="number"
                        id="sprite-size"
                        min="0" max="100" step="0.1"
                        value={targetSprite.x}
                        onChange={updateSpriteAttributeFromInput('x').bind(this)} />
                </div>

                <div className="attr">
                    <label htmlFor="sprite-y">Y Position</label>
                    <input type="number"
                        id="sprite-sze"
                        min="0" max="100" step="0.1"
                        value={targetSprite.y}
                        onChange={updateSpriteAttributeFromInput('y').bind(this)} />
                </div>

                <div className="attr">
                    <label htmlFor="sprite-size">Size</label>
                    <input type="number"
                        id="sprite-size"
                        min="0" max="100" step="0.1"
                        value={targetSprite.size}
                        onChange={updateSpriteAttributeFromInput('size').bind(this)} />
                </div>

                <div className="attr">
                    <label htmlFor="sprite-flip-x">Flip X</label>
                    <span>{!!targetSprite.flipX ? 'true' : 'false'}</span>
                    <button onClick={toggleFlipX.bind(this)}>Toggle</button>
                </div>
            </div>
        );
    }

    // Render Scene selection view
    renderSceneSelection() {
        // Sets the current scene
        const setCurrentSceneNameCallback = newSceneName => {
            this.setState({
                currentSceneName: newSceneName,
                currentFrame: 0,
                targetSpriteIdx: -1,
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
        const setCurrentFrameCallback = newFrameIdx => {
            this.setState({
                currentFrame: newFrameIdx,
                targetSpriteIdx: -1,
            });
        }

        // Adds a new frame with particular content
        const addNewFrame = newFrameContent => {
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
        const deleteFrame = frameIndex => {
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
                    frame={this.getCurrentComicViewData().frame}
                    onClickListeners={this.getCurrentOnClickListeners()} />
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
                    {this.renderEditorPrimarySection()}
                </div>
                <div id="storyteller-view">
                    {this.renderStorytellerView()}
                </div>
                <div className="editor-pane">
                    {this.renderSceneSelection()}
                    {this.renderFrameSelection()}
                    {this.renderSceneEditor()}
                    {this.renderSpriteEditor()}
                </div>
            </div>
        );
    }
}

export default HomePage;