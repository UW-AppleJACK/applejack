import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

class BadgesPage extends React.Component {
    render() {
        return (
            <main>
                <NavBar></NavBar>
                <div class="section background-color-grape">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Badges - </h1>
                            <p class="color-sand">View the badges you have unlocked from the completed activities!</p>
                        </div>
                    </div>
                </div>

                <div class="section background-color-sand text-center">
                    <h1 class="color-blue">- Debris Characteristics Badges -</h1>
                    <div class="row">
                        <div class="column">
                            <img class="width-400px" src="images/crumbly-expert-complete.png" alt="Completed Crumbly Expert Badge" />
                        </div>
                        <div class="column">
                            <img class="width-400px" src="images/sharp-expert-complete.png" alt="Completed Sharp Expert Badge" />
                        </div>
                        <div class="column">
                            <img class="width-400px" src="images/loopy-expert-complete.png" alt="Completed Loopy Expert Badge" />
                        </div>
                        <div class="column">
                            <img class="width-400px" src="images/floppy-expert-complete.png" alt="Completed Floppy Expert Badge" />
                        </div>
                    </div>
                </div>

                <div class="section background-color-grape text-center">
                    <h1 class="color-sunshine">Debris Classification Badges</h1>
                    <div class="row">
                        <div class="column">
                            <img class="width-400px" src="images/debris-classification-hero-complete.png" alt="Completed Debris Classification Hero Badge" />
                        </div>
                        <div class="column">
                            <img class="width-400px" src="images/debris-classification-super-hero-complete.png" alt="Completed Debris Classification Super Hero Badge" />
                        </div>
                    </div>
                </div>
                <div class="section">
                    <Footer></Footer>
                </div>
            </main>
        );
    }
}

export default BadgesPage;
