import DEFAULT_DATA from './stories/DefaultData';
import MEET_STRAWBERRY from './stories/MeetStrawberry';
import MEET_SQUAWKY from './stories/MeetSquawky';
import MEET_HUMPHREY from './stories/MeetHumphrey';
import MEET_JADE from './stories/MeetJade';
import BEACH_SAFETY from './stories/BeachSafety';
import WAVERACER_TEST from './stories/WaveracerTest';

const STORYTELLER_DATA = {
  ...DEFAULT_DATA,
  ...MEET_STRAWBERRY,
  ...MEET_SQUAWKY,
  ...MEET_HUMPHREY,
  ...MEET_JADE,
  ...BEACH_SAFETY,
  ...WAVERACER_TEST,
};

export default STORYTELLER_DATA;
