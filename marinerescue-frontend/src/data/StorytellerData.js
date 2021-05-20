import DEFAULT_DATA from './stories/DefaultData';
import MEET_STRAWBERRY from './stories/MeetStrawberry';
import MEET_HUMPHREY from './stories/MeetHumphrey';
import MEET_JADE from './stories/MeetJade';

const STORYTELLER_DATA = {
  ...DEFAULT_DATA,
  ...MEET_STRAWBERRY,
  ...MEET_HUMPHREY,
  ...MEET_JADE,
};

export default STORYTELLER_DATA;
