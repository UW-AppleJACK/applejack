import React from 'react';
import Cookies from 'universal-cookie';
import './Storyteller.scss';

const STORYTELLER_COOKIE = 'storytellerCookie';
// Unix epoch time 32-bit int limit
const COOKIE_EXP = '2038-01-19T03:14:08+00:00';
// Keys to save to cookies
const STATE_KEYS_SAVE = ['testCounter'];

let cookies = null;

class Storyteller extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
    }

    loadStateFromCookie() {
        cookies = cookies || new Cookies();
        this.setState(cookies.get(STORYTELLER_COOKIE));
    }

    saveStateToCookie() {
        cookies = cookies || new Cookies();
        
        const stateToSave = {};
        STATE_KEYS_SAVE.forEach(key => {
            stateToSave[key] = this.state[key];
        });

        cookies.set(STORYTELLER_COOKIE, stateToSave, {
            path: '/',
            expires: new Date(COOKIE_EXP),
        });
    }

    getDefaultState() {
        return {
            testCounter: 0,
            currentScene: '',
            sceneHistory: [],
            complete: [],
        };
    }

    render() {
        return (
            <div id="storyteller" style={{ textAlign: 'center' }}>
                <div>{this.state.testCounter}</div>
                <button onClick={() => this.setState({ testCounter: this.state.testCounter + 1 })}>Increment</button>
                <div>
                    <button onClick={this.loadStateFromCookie.bind(this)}>Load</button>
                    <button onClick={this.saveStateToCookie.bind(this)}>Save</button>
                </div>
            </div>
        );
    }
}

export default Storyteller;