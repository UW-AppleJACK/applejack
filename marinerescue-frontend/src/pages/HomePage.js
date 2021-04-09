import React from 'react';

import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to Marine Rescue!</h1>
                <Link to="/classify">Play a Classification Game</Link><br/>
                <Link to="/storyteller/editor">Editor</Link><br/>
                <Link to="/storyteller-test">Try the Storyteller Preview</Link><br/>
            </div>
        );
    }
}

export default HomePage;