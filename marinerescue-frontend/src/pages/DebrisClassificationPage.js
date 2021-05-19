import React from 'react';
import ClassificationView from '../components/ClassificationView';
import DEBRIS_CLASSIFICATION_IMAGES from '../data/DebrisClassificationImagesData';
import DEBRIS_CLASSIFICATION_OPTIONS from '../data/DebrisClassificationOptionsData';

const URL_PREFIX = 'https://marinerescue-static.s3-us-west-2.amazonaws.com/classification/';

class DebrisClassificationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageId: 0,
      targetsCompleted: 0,
      facts: [
        {
          title: 'A fact about plastic...',
          textPrimary: 'Did you know that about 10% of all plastic ends up in the oceans?',
          textSecondary: 'That means that 26 million tons of plastc goes to the ocean every year! Plastic is poisonous to marine life.'
        },
        {
          title: 'A fact about ropes...',
          textPrimary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          textSecondary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'A fact about whales...',
          textPrimary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
          textSecondary: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        },
      ]
    };
  }

  prepareUrl(url) {
    return `${URL_PREFIX}${url.replaceAll(' ', '+')}`;
  }

  getImageWithId(id) {
    const image = DEBRIS_CLASSIFICATION_IMAGES.filter(image => image.id === id)[0];
    return {
      ...image,
      url: this.prepareUrl(image.url),
    };
  }

  getCurrentImage() {
    return this.getImageWithId(this.state.currentImageId);
  }

  getOptionsForClassification(classification) {
    return DEBRIS_CLASSIFICATION_OPTIONS[classification];
  }

  getCurrentOptions() {
    return this.getOptionsForClassification(this.getCurrentImage().classification);
  }

  onClassify(image, option) {
    console.log(`classified ${image.id} as ${option.id}`)
    this.setState({
      targetsCompleted: this.state.targetsCompleted + 1,
      currentImageId: this.state.currentImageId + 1,
    });
  }

  render() {
    return (
      <div className="debris-classification-page">
        <ClassificationView
          options={this.getCurrentOptions()}
          target={this.getCurrentImage()}
          onClassify={this.onClassify.bind(this)}
          facts={this.state.facts}
          factsProportion={0.25}
        />
      </div>
    );
  }
}

export default DebrisClassificationPage;