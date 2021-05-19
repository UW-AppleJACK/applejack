import React from 'react';
import './ClassificationView.scss';
import Modal from './Modal';

class ClassificationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seenFactIndices: [],
      currentFactObject: {},
      selectedHelpObject: {},
      loadingImage: true
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.target.id !== this.props.target.id) {
      this.setState({ loadingImage: true });
    }
  }

  updateSelectedHelpObject(newHelpObject) {
    // Higher-order function used for onClick callbacks to updated selectedHelpObject
    return () => {
      this.setState({
        selectedHelpObject: newHelpObject
      })
    }
  }

  onClassify(target, option) {
    this.props.onClassify(target, option);

    if (this.state.seenFactIndices.length !== this.props.facts.length && Math.random() < this.props.factsProportion) {
      // Select a random fact that hasn't already been seen. This can be optimized.
      let chosenFactIndex = -1;
      while (chosenFactIndex < 0 || this.state.seenFactIndices.includes(chosenFactIndex)) {
        chosenFactIndex = Math.floor(Math.random() * this.props.facts.length);
      }

      this.setState({
        seenFactIndices: [...this.state.seenFactIndices, chosenFactIndex],
        currentFactObject: this.props.facts[chosenFactIndex]
      })
    }
  }

  renderClassificationOptions(options, disabled) {
    return (options || []).map(option => (
      <div className="classification-option" key={option.id}>
        <button className="std-btn button-select" onClick={() => this.onClassify(this.props.target, option)} disabled={disabled}>{option.display}</button>
        <button className="std-btn button-help" onClick={this.updateSelectedHelpObject(option)}>Help?</button>
      </div>
    ))
  }

  renderFactModal(currentFactObject) {
    return (
      <Modal
        imageUrl={currentFactObject.imageUrl}
        imageAlt={currentFactObject.imageAlt}
        textTitle={currentFactObject.title}
        textPrimary={currentFactObject.textPrimary}
        textSecondary={currentFactObject.textSecondary}
        show={Object.keys(currentFactObject).length !== 0}
        onClickPrimaryButton={() => this.setState({ currentFactObject: {} })}
      />
    );
  }

  renderHelpModal(selectedHelpObject) {
    return (
      <Modal
        imageUrl={selectedHelpObject.helpImageUrl}
        imageAlt={selectedHelpObject.helpImageAlt}
        textTitle={selectedHelpObject.helpTextTitle}
        textPrimary={selectedHelpObject.helpTextPrimary}
        textSecondary={selectedHelpObject.helpTextSecondary}
        show={Object.keys(selectedHelpObject).length !== 0}
        onClickPrimaryButton={this.updateSelectedHelpObject({})}
      />
    );
  }

  render() {
    return (
      <div className="classification-view">
        {this.renderFactModal(this.state.currentFactObject)}
        {this.renderHelpModal(this.state.selectedHelpObject)}
        <div className="classification-target">
          {this.state.loadingImage && <p>Loading...</p>}
          { /* eslint-disable-next-line */}
          <img
            src={this.props.target.url}
            className={this.state.loadingImage ? 'loading' : ''}
            alt="Image to classify."
            onLoad={() => this.setState({ loadingImage: false })}
          />
        </div>
        <div className="classification-options">
          {this.renderClassificationOptions(this.props.options, this.state.loadingImage)}
        </div>
      </div>
    );
  }
}

export default ClassificationView;