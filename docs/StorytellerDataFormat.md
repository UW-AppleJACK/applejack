# Storyteller Data Format

Storyteller drives the storytelling components of Marine Rescue.

## Storyteller Terminology

* State: The current state of the game.
* Scene: A scene represents one comic or one minigame.
* Comic: A comic is a set of sequentially-ordered frames.
* Frame: A frame defines the position, sizes, and other attributes of all the elements that are on-screen.
* Element: An item that should be displayed on-screen (i.e. sprite).
* Sprite: An image that is an element.

## State Data Format

The state stores the current state of the game, and it can be saved and restored from cookies.

### State Data Format Keys

* `stateFormatVersion`: An integer representing the current version of the state format.
* `currentScene`: Current scene and frame in the format `${sceneName}/${frameNumber}` for comics.
* `sceneHistory`: An array of previous scenes, where index 0 is the oldest scene in the history. The history is cleared when entering or exiting minigame scenes to avoid confusing UX, but history is maintained between comic scenes.
* `complete`: An array of strings that flags which areas of the game have been completed.

## Scene Data Format

A scene is an object that looks like this:

```
{
    type: 'comic',
    background: 'test-2',
    nextScene: 'testScene',
    baseFrame: [ ... ]
    frames: [ [...], [...], ... ]
}
```

### Scene Data Format Keys

* `type`: The scene type (either `comic` or `minigame`).
* `background`: Background to be displayed if this scene is a comic. All backgrounds are in the `/marinerescue-frontend/public/sprites/` directory with `bg-` prefix.
* `nextScene`: Scene to change to after this scene is complete.
* `baseFrame`: A base frame that is prepended to every frame in the scene.
* `frames`: All the frames in the scene.

## Frame Data Format

A frame is an array of elements that looks like this:

```
[
    {
        type: 'sprite',
        image: 'strawberry',
        x: 40,
        y: 40,
        size: 20,
    },
    ...
]
```

### Element Data Format Keys

* `type`: The element type (usually `sprite`).
* `image`: Image to be displayed if this element is a sprite. All sprites are in the `/marinerescue-frontend/public/sprites/` directory with `sprite-` prefix.
* `x`: The position of the left edge of the element as a percentage of the view.
* `y`: The position of the top edge of the element as a percentage of the view.
* `size`: The width of the element as a percentage of the view.
* `id`: Optional, a scene-unique ID that enables the element to animate between frames.
