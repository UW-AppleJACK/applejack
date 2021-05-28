import React from 'react';
import Storyteller from '../components/Storyteller';

const START_SCENE_MAP = {
  'strawberry': 'MeetStrawberry',
  'humphrey': 'MeetHumphrey',
  'jade': 'Jade Story',
  'squawky': 'Squawky Scene 0',
  'beach': 'Beach Safety 0-3',
  'waveracer-test': 'waveracer-test',
}

class StorytellerPage extends React.Component {
  render() {
    const startScene = START_SCENE_MAP[this.props.startSceneLabel];
    return <Storyteller startScene={startScene} />
  }
}

export default StorytellerPage;
