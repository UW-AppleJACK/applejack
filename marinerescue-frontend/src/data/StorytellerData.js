import DEFAULT_DATA from './stories/DefaultData';
import MEET_STRAWBERRY from './stories/MeetStrawberry';
import MEET_HUMPHREY from './stories/MeetHumphrey';
import MEET_JADE from './stories/MeetJade';
import WAVERACER_TEST from './stories/WaveracerTest';

const STORYTELLER_DATA = {
  ...DEFAULT_DATA,
  ...MEET_STRAWBERRY,
  ...MEET_HUMPHREY,
  ...MEET_JADE,
  ...WAVERACER_TEST,
};

export default STORYTELLER_DATA;
