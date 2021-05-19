const MEET_STRAWBERRY = {
  "MeetStrawberry": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": "meetstrawberry-towater",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "strawberry",
        "x": 25.799999999999997,
        "y": 33.7,
        "size": "40",
        "flipX": false
      }
    ],
    "frames": [
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "Strawberry",
        "message": "Hi there! My name is Strawberry. I’m a Harbor Seal and I live in the Puget Sound.",
        "type": "left"
      },
      {
        "speaker": "Strawberry",
        "message": "Welcome to my favorite beach! It’s the Penn Cove Beach on Whidbey Island.",
        "type": "left"
      }
    ]
  },
  "MeetStrawberry-towater": {
    "type": "comic",
    "background": "beach-small",
    "nextScene": "meetstrawberry-inwater",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "25.7",
          "y": "037",
          "size": "040",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "lighter",
          "x": 92.5,
          "y": 39.3,
          "size": "03",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "fishingline",
          "x": 84.8,
          "y": 43.1,
          "size": "015",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "blue-bag",
          "x": 93.89999999999999,
          "y": 38.5,
          "size": "010",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Strawberry",
        "message": "I come here all the time to bask in the sun and meet up with my animal friends!",
        "type": "left"
      }
    ]
  },
  "MeetStrawberry-inwater": {
    "type": "comic",
    "background": "sea-mountains",
    "nextScene": "GOTO /play?next=squawky",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "blue-bag",
        "x": 72,
        "y": 40.1,
        "size": "20",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "lighter",
        "x": 68.1,
        "y": 37.3,
        "size": "06",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "fishingline",
        "x": 61.79999999999999,
        "y": 46.9,
        "size": "30",
        "flipX": false
      }
    ],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "strawberry-surprised",
          "x": 12.099999999999998,
          "y": "32.4",
          "size": "43",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "strawberry",
          "x": 12.2,
          "y": 35.00000000000001,
          "size": "040",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "strawberry-sad",
          "x": "11.800000000000004",
          "y": "034.2",
          "size": "40",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "11.800000000000004",
          "y": "034.2",
          "size": "40.3",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Strawberry",
        "message": "Oh no! Is that more marine debris?",
        "type": "left"
      },
      {
        "speaker": "Strawberry",
        "message": "Recently, a lot of humans have been leaving their trash on the beach. When it gets swept into the water, scientists call it marine debris.",
        "type": "left"
      },
      {
        "speaker": "Strawberry",
        "message": "Marine debris can harm me and my friends in different ways depending on the characteristics. Seeing all this debris makes me worried for my friends.",
        "type": "left"
      },
      {
        "speaker": "Strawberry",
        "message": "Let’s go check on them together!",
        "type": "left"
      }
    ]
  },
};

export default MEET_STRAWBERRY;
