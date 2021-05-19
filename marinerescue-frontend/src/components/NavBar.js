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
                    <div class="nav-links">
                        <Link class="tab-option" to="/adventures">Adventures</Link>
                        <Link class="tab-option" to="/about">About</Link>
                        <Link class="tab-option" to="/parents">Parents</Link>
                        <Link class="tab-option" to="/badges">Badges</Link>
                        <Link class="tab-option" to="/play" id="nav-bar-button">Play Now</Link>
                    </div>
                    <a href="javascript:void(0);" class="menu-icon" onclick="myFunction()">
                        <img src="images/menu-white.png" alt="Menu bar"/>
                    </a>
            </div>
        );
    }
}

export default NavBar;