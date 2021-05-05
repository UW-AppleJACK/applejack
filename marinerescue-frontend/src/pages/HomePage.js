import React from 'react';

import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to Marine Rescue!</h1>
                <p><Link to="/classify">Play a Classification Game</Link></p>
                <p><Link to="/storyteller-test">Try the Storyteller Preview</Link></p>
                <p><Link to="/wave-racer">Play the Wave Racer Minigame</Link></p>
            </div>
        );
    }
}

export default HomePage;