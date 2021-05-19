const MEET_HUMPHREY = {
  "MeetHumphrey": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": "meethumphrey-towater",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "strawberry",
        "x": 9.3,
        "y": 35.300000000000004,
        "size": "40",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "humphrey",
        "x": 83,
        "y": 24.9,
        "size": "010",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "net",
        "x": 91.00000000000001,
        "y": 26.1,
        "size": "02",
        "flipX": false
      }
    ],
    "frames": [
      [],
      [],
      []
    ],
    "dialogue": [
      {
        "speaker": "Strawberry",
        "message": "Wow, do you see that animal way out in the water? That’s Humphrey the Whale!",
        "type": "left"
      },
      {
        "speaker": "Strawberry",
        "message": "Whales like Humphrey are huge and live far away from shore. He loves being complimented.\n",
        "type": "left"
      },
      {
        "speaker": "Strawberry",
        "message": "We should go meet Humphrey before he dives down deep into the water. Let’s go!",
        "type": "left"
      }
    ]
  },
  "MeetHumphrey-towater": {
    "type": "comic",
    "background": "beach-small",
    "nextScene": "meethumphrey-inwater",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "strawberry",
        "x": 12.899999999999999,
        "y": 37.1,
        "size": "40",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "humphrey",
        "x": "83",
        "y": "24.5",
        "size": "010",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "net",
        "x": "091.00000000000001",
        "y": "026.1",
        "size": "03",
        "flipX": false
      }
    ],
    "frames": []
  },
  "MeetHumphrey-inwater": {
    "type": "comic",
    "background": "sea-mountains-left",
    "nextScene": "netcuttingminigame",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "strawberry",
        "x": 4.600000000000001,
        "y": 46.1,
        "size": "25",
        "flipX": false
      }
    ],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "humphrey",
          "x": "032",
          "y": "031.2",
          "size": "60.4",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "net",
          "x": "79.5",
          "y": "037.3",
          "size": "20",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "humphrey-surprised",
          "x": "032",
          "y": "31.2",
          "size": "060.4",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "net",
          "x": 79.4,
          "y": 39.3,
          "size": "020",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "humphrey",
          "x": "032",
          "y": "031.2",
          "size": "60.4",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "net",
          "x": "79.5",
          "y": "037.3",
          "size": "20",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "humphrey",
          "x": "032",
          "y": "031.2",
          "size": "60.4",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "net",
          "x": "79.5",
          "y": "037.3",
          "size": "20",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Strawberry",
        "message": "Oh no, Humphrey! What is that?",
        "type": "left"
      },
      {
        "speaker": "Humphrey",
        "message": "Huh? Oh, I didn’t even notice! I was about to dive, but it looks like I’m caught in a fishing net.",
        "type": "right"
      },
      {
        "speaker": "Strawberry",
        "message": "I’m glad we got to you just in time! If you tried to dive, the fishing might have prevented you from swimming deep enough to catch your prey.",
        "type": "left"
      },
      {
        "speaker": "Strawberry",
        "message": "Let’s cut this net off of you!",
        "type": "left"
      }
    ]
  },
  "NetCuttingMinigame": {
    "type": "minigame",
    "background": "test-1",
    "nextScene": "meethumphrey-afterminigame",
    "baseFrame": [],
    "frames": [],
    "minigame": "DemoMinigame"
  },
  "MeetHumphrey-afterminigame": {
    "type": "comic",
    "background": "sea-mountains",
    "nextScene": {
      "Hello Humphrey!": "meethumphrey-decision-hi",
      "You're so BIG!": "meethumphrey-decision-flattery"
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "strawberry",
        "x": "04.600000000000001",
        "y": "046.1",
        "size": "025",
        "flipX": false
      }
    ],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "humphrey",
          "x": "032",
          "y": "31.2",
          "size": "60.4",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "net",
          "x": 80.5,
          "y": 56.699999999999996,
          "size": "20.2",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "net",
          "x": 80.5,
          "y": 56.699999999999996,
          "size": "20.2",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "humphrey-sad",
          "x": "032",
          "y": "31.2",
          "size": "60.4",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "net",
          "x": 80.5,
          "y": 56.699999999999996,
          "size": "20.2",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "humphrey",
          "x": "032",
          "y": "31.2",
          "size": "60.4",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "net",
          "x": 80.5,
          "y": 56.699999999999996,
          "size": "20.2",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "humphrey",
          "x": "032",
          "y": "31.2",
          "size": "60.4",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Humphrey",
        "message": "Thank you, both, I’m glad you stopped me just in time!",
        "type": "right"
      },
      {
        "speaker": "Humphrey",
        "message": "Many marine animals get injured by getting stuck in loopy debris like fishing nets and ropes.",
        "type": "right"
      },
      {
        "speaker": "Strawberry",
        "message": "I’m glad we could help out. By the way, this is our newest member of the Marine Rescue Team!",
        "type": "left"
      },
      null
    ]
  },
  "MeetHumphrey-decision-hi": {
    "type": "comic",
    "background": "sea-mountains",
    "nextScene": "meethumphrey-afterdecision",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "strawberry",
        "x": "004.600000000000001",
        "y": "046.1",
        "size": "25",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "humphrey",
        "x": "032",
        "y": "31.2",
        "size": "60.4",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "net",
        "x": "080.5",
        "y": "056.699999999999996",
        "size": "020.2",
        "flipX": false
      }
    ],
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "Humphrey",
        "message": "Hi there, new friend!",
        "type": "right"
      }
    ]
  },
  "MeetHumphrey-decision-flattery": {
    "type": "comic",
    "background": "sea-mountains",
    "nextScene": "meethumphrey-afterdecision",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "strawberry",
        "x": "004.600000000000001",
        "y": "046.1",
        "size": "25",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "humphrey-blush",
        "x": "032",
        "y": "31.2",
        "size": "60.4",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "net",
        "x": "080.5",
        "y": "056.699999999999996",
        "size": "20.2",
        "flipX": false
      }
    ],
    "frames": [
      []
    ],
    "dialogue": [
      {
        "speaker": "Humphrey",
        "message": "Haha! I like your friend a lot, Strawberry!",
        "type": "right"
      }
    ]
  },
  "MeetHumphrey-afterdecision": {
    "type": "comic",
    "background": "sea-mountains",
    "nextScene": "testScene2",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "humphrey",
          "x": "032",
          "y": "31.2",
          "size": "60.4",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "net",
          "x": "080.5",
          "y": "056.699999999999996",
          "size": "20.2",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "004.600000000000001",
          "y": "46.1",
          "size": "25",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "humphrey",
          "x": "058",
          "y": "31.2",
          "size": "60.4",
          "flipX": true
        },
        {
          "type": "sprite",
          "image": "net",
          "x": 51.400000000000006,
          "y": 51.20000000000001,
          "size": "20.2",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "0004.600000000000001",
          "y": "046.1",
          "size": "25",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "net",
          "x": "51.400000000000006",
          "y": 46.1,
          "size": "20.2",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": 6.200000000000003,
          "y": 33.4,
          "size": "040",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Humphrey",
        "message": "Thank you again for your help! I’m going to find some plankton to eat!",
        "type": "right"
      },
      null,
      {
        "speaker": "Strawberry",
        "message": "I do wonder where this big net came from! Let’s take it back to shore so we can dispose of it properly, and we can try to figure out this mystery along the way.",
        "type": "left"
      }
    ]
  },
};

export default MEET_HUMPHREY;
