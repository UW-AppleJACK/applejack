import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';
import AboutPage from './pages/AboutPage';
import DebrisClassificationPage from './pages/DebrisClassificationPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/classify">
                    <DebrisClassificationPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
