import React from 'react';
import './NavBar.scss';
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    render() {
        return (
            <div class="navbar">
                    <Link to= "/">
                    <div class="navbar-logo">
                        <img src="images/logo.png" alt="Marine Rescue logo" />
                    </div>
                    </Link>
                    <Link to="/adventures">Adventures</Link>
                    <Link to="/about">About</Link>
                    <Link to="/parents">Parents</Link>
                    <Link to="/badges">Badges</Link>
                    <Link to="/play" id="nav-bar-button">Play Now</Link>
            </div>
        );
    }
}

export default NavBar;