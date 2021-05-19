const MATERIAL_OPTIONS = [
  {
    id: 'crumbly',
    display: 'Crumbly',
    helpTextTitle: 'What is "Crumbly"?',
    helpTextPrimary: '...',
  },
  {
    id: 'floppy',
    display: 'Floppy',
    helpTextTitle: 'What is "Crumbly"?',
    helpTextPrimary: '...',
    helpTextTitle: 'What is "Loopy"?',
    helpTextPrimary: 'Loopy things have circle shapes in them, like a rollercoaster!',
    helpTextSecondary: 'Loopy things are dangerous to marine animals because they can get stuck in the loops. Getting stuck can make it hard to move and hard to breath.',
    helpImageUrl: '/images/loopy-help-image.png',
    helpImageAlt: 'Comic of Strawberry saying "you can\'t grab that rope! It might get caught on your neck and hurt you.',
  },
  {
    id: 'loopyfloppy',
    display: 'Loopy/Floppy',
    helpTextTitle: 'What is "Loopy"?',
    helpTextPrimary: 'Loopy things have circle shapes in them, like a rollercoaster!',
    helpTextSecondary: 'Loopy things are dangerous to marine animals because they can get stuck in the loops. Getting stuck can make it hard to move and hard to breath.',
    helpImageUrl: '/images/loopy-help-image.png',
    helpImageAlt: 'Comic of Strawberry saying "you can\'t grab that rope! It might get caught on your neck and hurt you.',
  },
  {
    id: 'sharp',
    display: 'Sharp',
    helpTextTitle: 'What is "Sharp"?',
    helpTextPrimary: '...',
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
