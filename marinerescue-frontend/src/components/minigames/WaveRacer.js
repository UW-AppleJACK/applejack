import React from 'react';

class WaveRacer extends React.Component {
    render() {
        return (
            <div>
                
                <button onClick={this.props.toNext}>Next</button>
            </div>
        );
    }
}

export default WaveRacer;