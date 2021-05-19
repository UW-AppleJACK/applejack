const MATERIAL_OPTIONS = [
  {
    id: 'crumbly',
    display: 'Crumbly',
  },
  {
    id: 'floppy',
    display: 'Floppy'
  },
  {
    id: 'loopyfloppy',
    display: 'Loopy/Floppy'
  },
  {
    id: 'sharp',
    display: 'Sharp'
  },
];

const COLOR_OPTIONS = [
  {
    id: 'clear',
    display: 'Clear',
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
