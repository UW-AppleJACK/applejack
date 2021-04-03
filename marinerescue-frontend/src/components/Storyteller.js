import React from 'react';
import Cookies from 'universal-cookie';
import ComicView from './ComicView/ComicView';
import './Storyteller.scss';

const STORYTELLER_COOKIE = 'storytellerCookie';
// Unix epoch time 32-bit int limit
const COOKIE_EXP = '2038-01-19T03:14:08+00:00';
// Keys to save to cookies
const STATE_KEYS_SAVE = [];

let cookies = null;

const TEST = [
    {
        type: 'sprite',
        image: 'strawberry',
        x: 40,
        y: 40,
        size: 20,
    },
    {
        type: 'sprite',
        image: 'strawberry',
        x: 80,
        y: 80,
        size: 5.3,
    },
];

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
            currentScene: '',
            sceneHistory: [],
            complete: [],
        };
    }

    render() {
        return (
            <div id="storyteller" style={{ textAlign: 'center' }}>
                <div id="storyteller-view">
                    <ComicView elements={TEST} />
                </div>
            </div>
        );
    }
}

export default Storyteller;