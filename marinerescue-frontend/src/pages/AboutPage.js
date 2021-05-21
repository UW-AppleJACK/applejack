import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

class AboutPage extends React.Component {
    render() {
        return (
            <main class="marketing-page">
                <NavBar></NavBar>
                <div class="section background-color-grape">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Our Goal - </h1>
                            <p class="color-sand">Marine Rescue is a platform for elementary students to learn about debris' impacts on marine wildlife.</p>
                            <p class="color-sand">Through interactive educational stories and activities, students contribute to citizen science projects so that they can develop a sense of connection to the natural world through active learning while meaningfully contributing to science research.</p> 
                            <p class="color-sand">While conducting user research, we found a lack of designated science class time in schools and a lack of curriculum for parents teaching science at home. This inspired us to create Marine Rescue as an accessible and hands-on learning experience for students to learn marine science outside of the classroom. <Link to="/capstone">Read more</Link>  about our capstone project.</p>
                        </div>
                    </div>
                </div>

                <div class="section background-color-sand text-center">
                    <div class="our-team">
                        <h1 class="color-blue">- Our Team -</h1>
                        <p>We are a team of four students studying Informatics at the University of Washington’s Information School. </p>
                        <div class="row">
                            <div class="column">
                                <div class="content">
                                    <img class="width-400px" src="images/andrey-butenko.png" alt="Image of Andrey Butenko" />
                                    <h2 class="color-grape">Andrey Butenko</h2><br />
                                    <h3 class="color-grape">Software Developer</h3>
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img class="width-400px" src="images/kiran-pradhan.png" alt="Image of Kiran Pradhan" />
                                    <h2 class="color-grape">Kiran Pradhan</h2><br />
                                    <h3 class="color-grape">Software Developer</h3>
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img class="width-400px" src="images/cheryl-wu.png" alt="Image of Cheryl Wu" />
                                    <h2 class="color-grape">Cheryl Wu</h2><br />
                                    <h3 class="color-grape">UX Designer</h3>
                                </div>                            
                            </div>
                            <div class="column">
                                <div class="content">
                                    <img class="width-400px" src="images/jacinda-eng.png" alt="Image of Jacinda Eng" />
                                    <h2 class="color-grape">Jacinda Eng</h2><br />
                                    <h3 class="color-grape">PM/Designer</h3>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section background-color-grape">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Acknowledgements - </h1>
                            <p class="color-sand">Our team is grateful for the support from our mentors and peers at the University of Washington’s Information School for their advice through each iteration of our project. Throughout the development of this project, we have worked with the Coastal Observation and Seabird Survey Team (COASST). The team at COASST has helped ensure the validity of our content and provided materials such as photos and informational handouts from their Marine Debris program which are incorporated in our educational activities. Our team would like to thank COASST for their incredible support through this development process.  </p>
                            <p class="color-sand">COASST is a citizen science program housed at the University of Washington with more than 20 years of history. The program’s goal is to focus on beach environment, specifically marine debris and beached birds in the northeast Pacific area. To learn more about COASST, visit their <a href="https://coasst.org/" target="_blank">website</a>.</p>
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

export default AboutPage;