import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './CapstonePage.scss';


class CapstonePage extends React.Component {
    render() {
        return (
            <main>
                <NavBar></NavBar>
                <div class="section background-color-grape">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Behind the Screen - </h1>
                            <p class="color-sand">Dive in to learn about the design and development process of Marine Rescue</p>
                        </div>
                    </div>
                </div>

                <div class="section background-color-sand text-left">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-blue">- The Problem - </h1>
                        </div>
                    </div>
                    <h2 class="color-grape text-left">Problem Statement</h2>
                        <p class="color-grape">How might Seattle-area students between ages 8-12 achieve learning about debris’ impacts on marine wildlife while contributing to citizen science projects so that they can develop a sense of connection to the natural world through active learning while meaningfully contributing to science research? </p>
                    <h2 class="color-grape">Supporting Research Questions</h2>
                        <ul />
                        <li class="color-grape">How can elementary school kids be exposed to science at-home in a way that supports their development?</li>
                        <li class="color-grape">How might exposure to science through hands-on projects at a young age increase elementary school kids' interest in STEM fields in the future?</li>
                        <li class="color-grape">How can extending established citizen science projects to involve elementary school kids as volunteers increase kids' awareness of their surroundings and their interest in STEM fields in the future?</li>
                    <h2 class="color-grape">Research</h2>
                        <li class="color-grape">To connect our interests in science and education, we researched science learning in-school and at-home. Our initial research surveyed over 100+ <a class="color-grape" href="https://forms.gle/TxDu4XinDqzBjrPi6" target="_blank">parents</a> and <a class="color-grape" href="https://forms.gle/cBxgYgYLcZPn4Yur9college" target="_blank">college students</a> about their perceptions of learning science in K-12. Many students recall starting to learn science around age 7-12 and more than 25% of participants described classes as “boring” and “repetitive”. From these findings, we decided to target kids as the primary users. </li>
                        <li class="color-grape">Our market research showed that there are a variety of resources to learn science, but specifically no platforms for kids to connect to the natural world through citizen science. With children being naturally curious and engaged, we find an opportunity to create an active-learning citizen science platform for students to contribute their findings to research. </li>
                        <li class="color-grape">Next, we conducted 10+ user interviews and learned that due to online learning, students aren’t learning science as much as class time is reduced and there is a lack of active-learning. From our literature review, there’s a lack of curriculum for parents and 99% of parents from an article in our literature review think science learning is important but do not feel confident in their teaching ability. </li>
                        <li class="color-grape">At the end of our research, we decided to pursue an at-home learning science solution for students between the ages of 8-12 to develop a connection to the natural world and contribute to science research. </li>
                </div>


                <div class="section background-color-grape text-left">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Design Framework - </h1>
                        </div>
                    </div>
                    <h2 class="color-sand text-left">Style Guide</h2>
                        <p class="color-sand">On our website pages and modules, you can see a cohesive and distinct style that we’ve paid attention to based on our <a href="https://drive.google.com/file/d/1Ptt0t5vMeLaXCKK2VhvURmOcmdILz-Ot/view?usp=sharing" target="_blank">style guide</a>. In our guide, we have typography, color palette, button designs, and logo to create our brand’s aesthetic. Having a designated style makes sure that our users will have a pleasant experience as they take in the imaginative setting that we put them in and allows for our elements to be consistent. </p>
                    <h2 class="color-sand">Illustrations/Backgrounds</h2>
                        <p class="color-sand">We’ve also made many unique, illustrated assets that were made according to our scripts. A lot of detail has been put into the illustrations that’s pleasing to the eye and fits with our platform’s style. These illustrations have been iterated many times based on user feedback and general improvements </p>
                    <div class="row">
                        <div class="column">
                            <div class="content">
                            <img class="height-300px" src="images/beach-rocks.png" alt="Image of beach rocks background" />
                                <p class="color-sand text-center">Beach rocks background</p>
                            </div>                            
                        </div>
                        <div class="column">
                            <div class="content">
                                <img class="height-300px" src="images/shiba.png" alt="Image of shiba" />
                                <p class="color-sand text-center">Shiba character</p>
                            </div>                            
                        </div>
                    </div>
                        <div class="row-no-padding">
                            <div class="column">
                                <div class="characters-section">
                                    <h2 class="color-sand padding-bottom-30px">Characters</h2>
                                    <p class="color-sand padding-bottom-30px">Each character has slightly different emotions that they switch to relating to what’s happening in the story. This makes our platform more immersive and interactive!</p>
                                </div>
                            </div>
                            <div class="column">
                                <img class="height-300px" src="images/character-emotions.png" alt="Image of shiba" />
                            </div>
                        </div>
                </div>


                <div class="section background-color-sand text-left">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-blue">- Our Takeaways - </h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="content">
                                <div class="container">
                                    <p class="color-purple text-center">“I learned how to gather feedback from my peers and users to help improve the illustrations without compromising my creativity, yet staying within Marine Rescue’s aesthetic.”</p>
                                    <p class="color-purple text-center">- Cheryl</p>
                                </div>
                            </div>                            
                        </div>
                        <div class="column">
                            <div class="content">
                                <div class="container">
                                    <p class="color-purple text-center">“Building Marine Rescue has taught me how to work collaboratively in creating an application from scratch and allowed me to apply the technical development and design skills from the classroom to a real-world project”</p>
                                    <p class="color-purple text-center">- Jacinda</p>
                                </div>
                            </div>                            
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

export default CapstonePage;