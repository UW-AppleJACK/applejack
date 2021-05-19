import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal-container" style={{ 'display': this.props.show ? 'flex' : 'none' }}>
                <div className="modal">
                    {this.props.imageUrl && <img src={this.props.imageUrl} alt={this.props.imageAlt} />}
                    <div className="modal-content">
                        {this.props.textTitle && <h1>{this.props.textTitle}</h1> }
                        {this.props.textPrimary && <b>{this.props.textPrimary}</b> }
                        {this.props.textSecondary && <p>{this.props.textSecondary}</p> }
                        <button onClick={this.props.onClickPrimaryButton} className="std-btn">{this.props.primaryButtonText || 'Okay'}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;