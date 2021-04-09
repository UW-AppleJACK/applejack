import React from 'react';

import { Link } from "react-router-dom";

import './AboutPage.scss';


class AboutPage extends React.Component {
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
                            <h1>- Our Goal - </h1>
                            <h2>Marine Rescue is a platform for elementary students to learn about debris' impacts on marine wildlife.</h2>
                            <br />
                            <h2>Through interactive educational stories and activities, students contribute to citizen science projects so that they can develop a sense of connection to the natural world through active learning while meaningfully contributing to science research. From our user research when developing this project, we found a lack of designated science class time in schools and a lack of curriculum for parents teaching science at home. This inspired us to create Marine Rescue as an accessible and hands-on learning experience for students to learn marine science outside of the classroom. </h2>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="our-team">
                        <h1>- Our Team -</h1>
                        <h2>We are a team of four students studying Informatics at the University of Washington’s Information School. </h2>
                        <div class="row">
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/andrey-butenko.png"></img>
                                    <h2>Andrey Butenko</h2><br />
                                    <h3>Software Developer</h3>
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/kiran-pradhan.png"></img>
                                    <h2>Kiran Pradhan</h2><br />
                                    <h3>Software Developer</h3>
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/cheryl-wu.png"></img>
                                    <h2>Cheryl Wu</h2><br />
                                    <h3>UX Designer</h3>
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/jacinda-eng.png"></img>
                                    <h2>Jacinda Eng</h2><br />
                                    <h3>PM/Designer</h3>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="row">
                        <div class="column">
                            <h1>- Acknowledgements - </h1>
                            <p>Our team is grateful for the support from our mentors and peers at the University of Washington’s Information School for their advice through each iteration of our project. Throughout the development of this project, we have worked with the Coastal Observation and Seabird Survey Team (COASST). The team at COASST has helped ensure the validity of our content and provided materials such as photos and informational handouts from their Marine Debris program which are incorporated in our educational activities. Our team would like to thank COASST for their incredible support through this development process.  </p>
                            <p>COASST is a citizen science program housed at the University of Washington with more than 20 years of history. The program’s goal is to focus on beach environment, specifically marine debris and beached birds in the northeast Pacific area. To learn more about COASST, visit their <a href="https://coasst.org/" target="_blank">website</a>.</p>
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

export default AboutPage;
