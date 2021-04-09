import React from 'react';

import { Link } from "react-router-dom";

import './AboutPage.scss';


class ParentsPage extends React.Component {
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
                            <h1>- What is Marine Rescue? - </h1>
                            <h2>Marine Rescue is a safe, secure, and private platform for elementary students to learn about debris' impacts on marine wildlife through interactive stories and activities.</h2>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="our-team">
                        <h1>- Educational Outcomes -</h1>
                        <div class="row">
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/marine-debris-education-outcomes.png"></img>
                                    <h2>Marine Debris</h2><br />
                                    <h3>Students will learn about marine debris, where it comes from, and its impact on marine life to encourage responsible citizenship development.

This learning module includes an interactive story for students to learn about key marine debris concept, and an activity to practice characterizing different kinds of marine debris. </h3>
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/safety-education-outcomes.png"></img>
                                    <h2>Safety</h2><br />
                                    <h3>Students will learn about marine debris, where it comes from, and its impact on marine life to encourage responsible citizenship development.

This learning module includes an interactive story for students to learn about key marine debris concept, and an activity to practice characterizing different kinds of marine debris. </h3>
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/ecosystems-education-outcomes.png"></img>
                                    <h2>Ecosystems</h2><br />
                                    <h3>Students will learn about marine debris, where it comes from, and its impact on marine life to encourage responsible citizenship development.

This learning module includes an interactive story for students to learn about key marine debris concept, and an activity to practice characterizing different kinds of marine debris. </h3>
                                </div>                            
                            </div>
                        </div>
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

export default ParentsPage;