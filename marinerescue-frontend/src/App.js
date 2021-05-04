import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.scss';
import Storyteller from "./components/Storyteller";
import AboutPage from './pages/AboutPage';
import DebrisClassificationPage from './pages/DebrisClassificationPage';
import HomePage from './pages/HomePage';
import ParentsPage from './pages/ParentsPage';
import GameLandingPage from './pages/GameLandingPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/parents">
                    <ParentsPage />
                </Route>
                <Route path="/classify">
                    <DebrisClassificationPage />
                </Route>
                <Route path="/storyteller-test">
                    <Storyteller />
                </Route>
                <Route path="/play">
                    <GameLandingPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
