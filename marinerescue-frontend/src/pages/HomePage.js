import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import './HomePage.scss';

class HomePage extends React.Component {
    render() {
        return (
            <main class="marketing-page">
                <NavBar></NavBar>
                <div class="section background-color-grape">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">Join the Adventure</h1>
                            <p class="color-sand">Join the Marine Rescue team in <br />
                                                        learning about how marine debris <br />
                                                        affects ocean life and what you can do <br />
                                                        to help in this citizen science journey!</p>
                            <button>Play Now</button>
                        </div>
                        <div class="column">
                            <img id="strawberry-welcome" src="images/section-1-strawberry-welcome.png" alt="Strawberry giving a welcoem to the Marine Rescuers" />
                        </div>
                    </div>
                </div>

                <div class="section background-color-sand text-center">
                    <h1 class="color-blue">Your Journey So Far</h1>
                    <h2 class="color-grape">Earn points and badges while helping the Marine Rescue team learn more about their environment!</h2>
                    <div class="row">
                        <div class="column">
                            <img class="width-400px" src="images/strawberry-and-friends-icon.png" alt="Strawberry and friends icon" />
                            <h2 class="color-grape">Strawberry and Friends</h2>
                        </div>
                        <div class="column">
                            <img class="width-400px" src="images/marine-debris-icon.png" alt="Marine debris icon" />
                            <h2 class="color-grape">Marine Debris</h2>
                        </div>
                        <div class="column">
                            <img class="width-400px" src="images/beach-safety-icon.png" alt="Beach safety icon" />
                            <h2 class="color-grape">Beach Safety</h2>
                        </div>
                    </div>
                </div>

                <div class="section background-color-grape text-center">
                    <h1 class="color-sunshine">Meet the Marine Rescue Team</h1>
                    <h2 class="color-sand">Get to know each marine animal's unique personality and story!</h2>
                    <div class="row">
                        <div class="column">
                            <div class="content background-color-sand">
                                <img class="width-400px" src="images/strawberry.png" alt="Image of Strawberry the harbor seal" />
                                <h3>Strawberry</h3><br />
                            </div>                            
                        </div>
                        <div class="column">
                            <div class="content background-color-sand">
                                <img class="width-400px" src="images/humphrey.png" alt="Image of Humphrey the humpback whale" />
                                <h3>Humphrey</h3><br />
                            </div>                            
                        </div>
                        <div class="column">
                            <div class="content background-color-sand">
                                <img class="width-400px" src="images/sqwacky.png" alt="Image of Sqwacky the albatross" />
                                <h3>Sqwacky</h3><br />
                            </div>                            
                        </div>
                        <div class="column">
                            <div class="content background-color-sand">
                                <img class="width-400px" src="images/jade.png" alt="Image of Jade the turtle" />
                                <h3>Jade</h3><br />
                            </div>                            
                        </div>
                    </div>
                </div>

                <div class="section background-color-sand">
                    <div class="parents-of-marine-rescuers-section">
                        <img src="images/two-jade-parents-background.png" alt="Image of Jade the turle with hearts" />
                        <Link to="/parents" className="mega-button"><h1>Parents of Marine Rescuers</h1>Read more about our team and mission in educating young scientists through Marine Rescue, a citizen science project teaching debris’ impacts on marine wildlife.</Link>
                    </div>
                </div>

                <div class="section">
                    <Footer></Footer>
                </div>
            </main>
        );
    }
}

export default HomePage;
