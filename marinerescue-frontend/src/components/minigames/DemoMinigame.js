import React from 'react';

class DemoMinigame extends React.Component {
    render() {
        return (
            <div>
                <p>Pretend this is a fun minigame! And press the button when you're ready to continue...</p>
                <button onClick={this.props.toNext}>Next</button>
            </div>
        );
    }
}

export default DemoMinigame;