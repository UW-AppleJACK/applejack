import React from 'react';

import './HomePage.scss';


import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render() {
        return (
            <main>
                <div class="navbar">
                    <Link to= "/">
                    <div class="navbar-logo">
                        <img src="images/logo.png"></img>
                    </div>
                    </Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/about">About</Link>
                    <Link to="/parents">Parents</Link>
                    <a href="#playnow"><button id="nav-bar-button">Play Now</button></a>
                    <a href="profile">Profile</a>
                    {/* <div class="navbar-logo">
                        <img src="images/profile-logo.png"></img>
                    </div> */}
                </div>

                <div class="section">
                    <div class="row">
                        <div class="column">
                            <h1>Join the Adventure</h1>
                            <h2>Join the Marine Rescue team in <br />
                                                        learning about how marine debris <br />
                                                        affects ocean life and what you can do <br />
                                                        to help in this citizen science journey!</h2>
                            <button>Play Now</button>
                        </div>
                        <div class="column">
                            <img id="strawberry-welcome" src="images/section-1-strawberry-welcome.png"></img>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-2">
                        <h1>Your Journey So Far</h1>
                        <h2>Earn points and badges while helping the Marine Rescue team learn more about their environment!</h2>
                        <div class="row">
                            <div class="column">
                                <img id="icon" src="images/strawberry-and-friends-icon.png"></img>
                                <h2>Strawberry and Friends</h2>
                            </div>
                            <div class="column">
                                <img id="icon" src="images/marine-debris-icon.png"></img>
                                <h2>Marine Debris</h2>
                            </div>
                            <div class="column">
                                <img id="icon" src="images/beach-safety-icon.png"></img>
                                <h2>Beach Safety</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-3">
                        <h1>Meet the Marine Rescue Team</h1>
                        <h2>Get to know each marine animal's unique personality and story!</h2>
                        <div class="row">
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/strawberry.png"></img>
                                    <h3>Strawberry</h3><br />
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/humphrey.png"></img>
                                    <h3>Humphrey</h3><br />
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/sqwacky.png"></img>
                                    <h3>Sqwacky</h3><br />
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/jade.png"></img>
                                    <h3>Jade</h3><br />
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-4">
                        <img src="images/two-jade-parents-background.png"></img>
                        <button id="parents-button"><h1>Parents of Marine Rescuers</h1>Read more about our team and mission in educating young scientists through Marine Rescue, a citizen science project teaching debris’ impacts on marine wildlife. </button>
                    </div>
                </div>

                <div class="section">
                    <div class="footer">
                    <div class="row">
                            <div class="column">                        
                            </div>
                            <div class="column">
                                <h3>Connect with us: </h3>
                                <img id="icon" src="images/youtube-logo.png"></img> <br />
                            </div>
                            <div class="column">
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">
                                <div class="navbar-logo">
                                    <img src="images/logo.png"></img>
                                </div>                            
                            </div>
                            <div class="column">
                                <h3>@2021 AppleJACK</h3>
                            </div>
                            <div class="column">
                                <img id="icon" src="images/ischool-logo.png"></img> <br />
                                <img id="icon" src="images/coasst-logo.png"></img>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default HomePage;