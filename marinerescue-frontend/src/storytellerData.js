const storytellerData = {
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

export default storytellerData;