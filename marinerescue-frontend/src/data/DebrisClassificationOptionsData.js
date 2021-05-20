const MATERIAL_OPTIONS = [
  {
    id: 'crumbly',
    display: 'Crumbly',
    textTitle: 'What is "Crumbly"?',
    textPrimary: '...',
  },
  {
    id: 'floppy',
    display: 'Floppy',
    textTitle: 'What is "Crumbly"?',
    textPrimary: '...',
    textTitle: 'What is "Loopy"?',
    textPrimary: 'Loopy things have circle shapes in them, like a rollercoaster!',
    textSecondary: 'Loopy things are dangerous to marine animals because they can get stuck in the loops. Getting stuck can make it hard to move and hard to breath.',
    imageUrl: '/images/loopy-help-image.png',
    imageAlt: 'Comic of Strawberry saying "you can\'t grab that rope! It might get caught on your neck and hurt you.',
  },
  {
    id: 'loopyfloppy',
    display: 'Loopy/Floppy',
    textTitle: 'What is "Loopy"?',
    textPrimary: 'Loopy things have circle shapes in them, like a rollercoaster!',
    textSecondary: 'Loopy things are dangerous to marine animals because they can get stuck in the loops. Getting stuck can make it hard to move and hard to breath.',
    imageUrl: '/images/loopy-help-image.png',
    imageAlt: 'Comic of Strawberry saying "you can\'t grab that rope! It might get caught on your neck and hurt you.',
  },
  {
    id: 'sharp',
    display: 'Sharp',
    textTitle: 'What is "Sharp"?',
    textPrimary: '...',
  },
];

const COLOR_OPTIONS = [
  {
    id: 'clear',
    display: 'Clear',
    helpTextTitle: 'What is "Clear"?',
    helpTextPrimary: '...',
  },
];

const DEBRIS_CLASSIFICATION_OPTIONS = {
  'crumbly': MATERIAL_OPTIONS,
  'floppy': MATERIAL_OPTIONS,
  'loopyfloppy': MATERIAL_OPTIONS,
  'sharp': MATERIAL_OPTIONS,
  'clear': COLOR_OPTIONS,
};

export default DEBRIS_CLASSIFICATION_OPTIONS;
