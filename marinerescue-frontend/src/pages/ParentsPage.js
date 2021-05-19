import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


class ParentsPage extends React.Component {
    render() {
        return (
            <main class="marketing-page">
                <NavBar></NavBar>
                <div class="section background-color-grape text-center">
                        <h1 class="color-sunshine">- What is Marine Rescue? - </h1>
                        <p class="color-sand">Marine Rescue is a safe, secure, and private platform for elementary students to learn about debris' impacts on marine wildlife through interactive stories and activities.</p>
                </div>

                <div class="section background-color-sand text-center">
                    <div class="our-team">
                        <h1 class="color-blue">- Educational Outcomes -</h1>
                        <div class="row">
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/marine-debris-education-outcomes.png" alt="Marine debris icon from Noun Project" />
                                    <h2>Marine Debris</h2><br />
                                    <p>Students will learn about marine debris, where it comes from, and its impact on marine life to encourage responsible citizenship development.

This learning module includes an interactive story for students to learn about key marine debris concept, and an activity to practice characterizing different kinds of marine debris. </p>
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/safety-education-outcomes.png" alt="Beach Safety icon from Noun Project" />
                                    <h2>Safety</h2><br />
                                    <p>Kids will learn how to safely clean up beaches, if they wish to do so in-person with a parent/guardian.

The beach safety module takes kids through scenarios where they encounter different types of debris and useful tools to handle them. The module also includes a fun game where kids learn how to explore tidepools, while keeping themselves and the creatures safe.</p>
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img id="icon" src="images/ecosystems-education-outcomes.png" alt="Ecosystems icon from Noun Project" />
                                    <h2>Ecosystems</h2><br />
                                    <p>Throughout the Marine Rescue modules, kids learn the importance of maintaining balance in ecosystems and how they can take action to ensure ecosystems, including the plants and animals in them, are not harmed. Kids can forge a connection to the natural world and learn the vocabulary to explore it in-person with a parent/guardian.</p>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section section-footer">
                    <Footer></Footer>
                </div>                
            </main>
        );
    }
}

export default ParentsPage;