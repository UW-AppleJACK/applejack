import React from 'react';
import Storyteller from '../components/Storyteller';

const START_SCENE_MAP = {
  'strawberry': 'MeetStrawberry',
  'humphrey': 'MeetHumphrey',
  'jade': 'Jade Story',
}

class StorytellerPage extends React.Component {
  render() {
    const startScene = START_SCENE_MAP[this.props.startSceneLabel];
    return <Storyteller startScene={startScene} />
  }
}

export default StorytellerPage;
