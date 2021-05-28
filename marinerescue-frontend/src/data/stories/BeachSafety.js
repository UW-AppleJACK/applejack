const BEACH_SAFETY = {
  "Beach Safety 0-3": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": "beach intro 4",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "annie-smile",
          "x": "040",
          "y": "20",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "sophie-and-ronald",
          "x": "062",
          "y": "19",
          "size": "35",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "05",
          "y": "50",
          "size": "030",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "05",
          "y": "50",
          "size": "030",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "annie-bag",
          "x": "040",
          "y": "20",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "sophie-and-ronald",
          "x": "062",
          "y": "19",
          "size": "35",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "sophie-and-ronald-2",
          "x": "062",
          "y": "19",
          "size": "35",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "annie-smile",
          "x": "040",
          "y": "020",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "05",
          "y": "50",
          "size": "30",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "05",
          "y": "50",
          "size": "30",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "annie-smile",
          "x": "040",
          "y": "20",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "sophie-and-ronald",
          "x": "62",
          "y": "19",
          "size": "35",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Strawberry",
        "message": "Now that you’ve met all my marine friends, I’d like to introduce you to Annie, Sofia, and Ronald!",
        "type": "right"
      },
      {
        "speaker": "Annie",
        "message": "Nice to meet you! I visit Golden Gardens park once a week to pick up trash that’s left behind on the beach. I like to keep the beach beautiful and keep the marine animals healthy!",
        "type": "left"
      },
      {
        "speaker": "Sofia",
        "message": "Hi, welcome to the Marine Rescue team! We always pick up trash whenever we see it to keep our environment safe. Annie and I always clean up the beach together because it’s safer and more fun to go to the beach with a friend.",
        "type": "left"
      },
      {
        "speaker": "Strawberry",
        "message": "Annie and Sofia are very experienced - you should ask them some questions about being safe on the beach!",
        "type": "right"
      }
    ]
  },
  "Beach Intro 4": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": {
      "“What do you do with the trash you pick up?”": "trash 0",
      "“What if I see a marine mammal on the beach?”": "mammals 0",
      "“How do you responsibly pick up marine debris?”": "marine debris 0",
      "“What clothes do you wear to stay safe?”": "clothes 0"
    },
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "sophie-and-ronald",
          "x": "062",
          "y": "19",
          "size": "35",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "annie-smile",
          "x": "040",
          "y": "20",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "05",
          "y": "50",
          "size": "30",
          "flipX": false
        }
      ]
    ]
  },
  "Beach Intro 4-withfarewell": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": {
      "“What do you do with the trash you pick up?”": "trash 0",
      "“What if I see a marine mammal on the beach?”": "mammals 0",
      "“How do you responsibly pick up marine debris?”": "marine debris 0",
      "“What clothes do you wear to stay safe?”": "clothes 0",
      "“Time to go...”": "Shore",
    },
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "sophie-and-ronald",
          "x": "062",
          "y": "19",
          "size": "35",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "annie-smile",
          "x": "040",
          "y": "20",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "05",
          "y": "50",
          "size": "30",
          "flipX": false
        }
      ]
    ]
  },
  "Clothes 0": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": "clothes 1-2",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "annie-bag",
          "x": "040",
          "y": "20",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "05",
          "y": "50",
          "size": "30",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "sophie-and-ronald",
          "x": "062",
          "y": "19",
          "size": "35",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Annie",
        "message": "That’s a great question! It’s important to wear clothes that keep you safe, warm, and comfortable.",
        "type": "left"
      }
    ]
  },
  "Clothes 1-2": {
    "type": "comic",
    "background": "beige",
    "nextScene": "clothes 3",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "annie-zoom-feet",
          "x": "0",
          "y": "0",
          "size": "085",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "annie-zoom-waist",
          "x": "04",
          "y": 0,
          "size": "090",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Annie",
        "message": "I always wear boots so that sand doesn’t get in my shoes/socks, and to keep my feet dry if I need to walk through a puddle or stream. Good walking shoes are important to stay safe on uneven surfaces.",
        "type": "left"
      },
      {
        "speaker": "Annie",
        "message": "These gardening gloves help keep my fingers warm on cold days, keep away germs, and protect me from getting cut on sharp trash. I always avoid dangerous trash, but thick gloves are an important precaution.",
        "type": "left"
      }
    ]
  },
  "Clothes 3": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": "Beach Intro 4-withfarewell",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "annie-bag",
          "x": "040",
          "y": "20",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "sophie-and-ronald",
          "x": "062",
          "y": "19",
          "size": "35",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "05",
          "y": "50",
          "size": "30",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Annie",
        "message": "I also wear long pants and shirts to keep my arms and legs warm and safe! It also protects my skin from getting sunburnt. Weather can be unpredictable, so I layer my clothing and bring a water-proof jacket to make sure I’m warm and dry.",
        "type": "left"
      }
    ]
  },
  "Marine Debris 0": {
    "type": "comic",
    "background": "beige",
    "nextScene": "marine debris 1",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "log",
          "x": "015",
          "y": "010",
          "size": "060",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "log",
          "x": "025",
          "y": "020",
          "size": "060",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "log",
          "x": "030",
          "y": "030",
          "size": "060",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "seashell",
          "x": "070",
          "y": "022",
          "size": "05",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "ronald",
          "x": "075",
          "y": "063",
          "size": "010",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "sophie-and-ronald-2",
          "x": "69",
          "y": "60",
          "size": "20",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Sofia",
        "message": "Logs can be slippery and you don’t want to fall! You should be very careful to watch your step when you’re walking on the beach.",
        "type": "left"
      }
    ]
  },
  "Marine Debris 1": {
    "type": "comic",
    "background": "beach-wrack",
    "nextScene": "marine debris 2",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "sophie-and-ronald-2",
          "x": "070",
          "y": "020",
          "size": "025",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Sofia",
        "message": "You should also be careful around wrack: that’s the sticks, seaweed, and shells brought onto the beach by the tide.",
        "type": "left"
      }
    ]
  },
  "Marine Debris 2": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": "marine debris 3",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "sophie-and-ronald-2",
          "x": "062",
          "y": "019",
          "size": "035",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "seashell",
          "x": "020",
          "y": "040",
          "size": "07",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "broken-bottle",
          "x": "030",
          "y": "050",
          "size": "20",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Sofia",
        "message": "If you see debris that is large or sharp, you should stay safe and leave it alone. Check if the beach you’re on or the city you’re in has a number you can call about hazardous debris.",
        "type": "left"
      }
    ]
  },
  "Marine Debris 3": {
    "type": "comic",
    "background": "beach-small",
    "nextScene": "Beach Intro 4-withfarewell",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "ronald",
          "x": "75",
          "y": "63",
          "size": "10",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "sophie-and-ronald-2",
          "x": "069",
          "y": "060",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "waves",
          "x": "010",
          "y": "040",
          "size": "030",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "waves",
          "x": "070",
          "y": "030",
          "size": "20",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Sofia",
        "message": "Finally, make sure to face the water. You never know when a big wave might come in. Be aware of your surroundings to stay safe and dry!",
        "type": "left"
      },
      null
    ]
  },
  "Mammals 0": {
    "type": "comic",
    "background": "beige",
    "nextScene": "mammals 1-4",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "ronald",
          "x": "027",
          "y": 0,
          "size": 50,
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Sofia",
        "message": "If you’re bringing your pet to the beach, they must always be on a leash so that they don’t disturb the wildlife. Even kind and gentle dogs are curious and will bother the wildlife.",
        "type": "left"
      }
    ]
  },
  "Mammals 1-4": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": "Beach Intro 4-withfarewell",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "035",
          "y": "36",
          "size": "20",
          "flipX": true
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "03",
          "y": "030",
          "size": "030",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "annie-bag",
          "x": "068",
          "y": "20",
          "size": "20",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "annie-bag",
          "x": "068",
          "y": "20",
          "size": "020",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry-surprised",
          "x": "03",
          "y": "30",
          "size": "30",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "035",
          "y": "36",
          "size": "20",
          "flipX": true
        }
      ],
      [
        {
          "type": "sprite",
          "image": "annie-smile",
          "x": "68",
          "y": "20",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "035",
          "y": "36",
          "size": "20",
          "flipX": true
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": 0,
          "y": "030",
          "size": "30",
          "flipX": true
        },
        {
          "type": "sprite",
          "image": "strawberry-love",
          "x": "04",
          "y": "058",
          "size": "040",
          "flipX": false
        }
      ],
      [
        {
          "type": "sprite",
          "image": "annie-smile",
          "x": "068",
          "y": "020",
          "size": "20",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "strawberry",
          "x": "035",
          "y": "36",
          "size": "20",
          "flipX": true
        },
        {
          "type": "sprite",
          "image": "ronald",
          "x": "045",
          "y": "63",
          "size": "10",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "sophie-and-ronald-2",
          "x": "39",
          "y": "60",
          "size": "20",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Annie",
        "message": "Speaking of wildlife, you should keep your distance from wild animals. Animals like to rest on the beach, and it’s stressful to have humans around. You should stay at least 150 feet away from seals and other marine mammals. 150 feet is half the length of a football field.",
        "type": "left"
      },
      {
        "speaker": "Annie",
        "message": "Remember that they’re wild animals: harbor seals like Strawberry can weigh up to 370 pounds and have sharp teeth!",
        "type": "left"
      },
      {
        "speaker": "Strawberry",
        "message": "Absolutely! Even if you see baby animals by themselves, you should keep your distance. For example, harbor seals can leave their baby on the beach while their mother finds food for them. The mother might not return if they see a human next to their babies.",
        "type": "right"
      },
      {
        "speaker": "Sofia",
        "message": "If you see a stranded, injured, or dead marine mammal on the beach, it is important to report it so that it can be investigated. You can go to fisheries.noaa.gov/report to find reporting information for your area.",
        "type": "left"
      }
    ]
  },
  "Trash 0": {
    "type": "comic",
    "background": "beige",
    "nextScene": "trash 1",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "garbage-bag",
          "x": "030",
          "y": "010",
          "size": "45",
          "flipX": false
        },
        {
          "type": "sprite",
          "image": "annie-bag",
          "x": "073",
          "y": "60",
          "size": "014",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Annie",
        "message": "You should put all the trash you pick up in a strong garbage bag that will not rip open. When you’re done, the bag should be tied and sealed so that the trash doesn’t spill out by accident!",
        "type": "left"
      }
    ]
  },
  "Trash 1": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": "Beach Intro 4-withfarewell",
    "baseFrame": [],
    "frames": [
      [
        {
          "type": "sprite",
          "image": "sophie-and-ronald-love",
          "x": "62",
          "y": "19",
          "size": "35",
          "flipX": false
        }
      ]
    ],
    "dialogue": [
      {
        "speaker": "Sofia",
        "message": "If you’re volunteering with an organization, they will give you instructions on a specific disposal site. If you’re cleaning up a beach with a friend, you should find a dumpster covered with a lid so that the trash bag doesn’t blow away.",
        "type": "left"
      }
    ]
  },
  "Shore": {
    "type": "comic",
    "background": "beach-big",
    "nextScene": "GOTO /play",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "annie-smile",
        "x": "040",
        "y": "20",
        "size": "20",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "sophie-and-ronald",
        "x": "62",
        "y": "19",
        "size": "35",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "strawberry",
        "x": "05",
        "y": "50",
        "size": "30",
        "flipX": false,
        "id": 0
      }

    ],
    "frames": [
      [],
      [],
      [],
      [],
    ],
    "dialogue": [
      {
        "speaker": "Strawberry",
        "message": "Wow, thanks for answering all our questions! Is there anything else we should know before we go?",
        "type": "left"
      },
      {
        "speaker": "Annie",
        "message": "Yes, one last thing! There are lots of small creatures like starfish on beaches! Watch your step when on the beach to be careful not to accidentally step on one.",
        "type": "right"
      },
      {
        "speaker": "Sophie",
        "message": "You can touch tidepool creatures like starfish to experience what they feel like. Be careful not to hurt them: only pet them with two wet fingers, but never pick them up or poke them.",
        "type": "right"
      },
      {
        "speaker": "Strawberry",
        "message": "Thank you for letting us know! It is important that every member of the Marine Rescue team behaves safely and in a way that is respectful of our marine ecosystem when spending time on the beach.",
        "type": "left"
      },
    ]
  },
};

export default BEACH_SAFETY;