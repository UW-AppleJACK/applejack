import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './CapstonePage.scss';

const CONTENT = {
            "Survey Insights": "When brainstorming, our team was interested in two areas: science and education. To connect these two topics, we researched science learning in-school and at-home. Our initial research surveyed over 100+ parents and college students about their perceptions of learning science in K-12. Many students recall starting to learn science around age 7-12 and more than 25% of participants described classes as “boring” and “repetitive”. From these findings, we decided to target kids as the primary users.",
            "User Interviews": "Next, we conducted 10+ user interviews and learned that due to online learning, students aren’t learning science as much as class time is reduced and there is a lack of active-learning. From our literature review, there’s a lack of curriculum for parents and 99% of parents from an article in our literature review think science learning is important, but do not feel confident in their teaching ability. This motivated us to create an at-home science learning platform that kids and parents could both benfit from.",
            "Market Research": "Our market research showed that there are a variety of resources to learn science, but specifically no platforms for kids to connect to the natural world through citizen science. With children being naturally curious and engaged, we found an opportunity to create an active-learning citizen science platform for students to contribute their findings to research."
        }
class CapstonePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        topic: "Survey Insights"
      }
      console.log(this.state.topic)
    }

    toggleContent(newTopic) {
        this.setState({topic: newTopic});
    }

    render() {
        return (
            <main class="marketing-page">
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
                    <div>
                        <h2 class="color-grape text-left">Problem Statement</h2>
                        <img class="responsive center" id="problem-statement" src="images/problem-statement.png" alt="Jade the Green Turtle with thought bubble saying problem statement"/>            
                    </div>
                    <div>
                        <h2 class="color-grape">Supporting Research Questions</h2>
                        <div class="content">
                            <ul />
                            <li class="color-grape">How can elementary school kids be exposed to science at-home in a way that supports their development?</li>
                            <li class="color-grape">How might exposure to science through hands-on projects at a young age increase elementary school kids' interest in STEM fields in the future?</li>
                            <li class="color-grape">How can extending established citizen science projects to involve elementary school kids as volunteers increase kids' awareness of their surroundings and their interest in STEM fields in the future?</li>
                        </div>
                    </div>
                    <div>
                        <h2 class="color-grape">Research</h2>
                        <div class="row-no-padding">
                            <div class="column">
                                <button class={this.state.topic == "Survey Insights" ? "topic-button-selected" : "topic-button"} onClick={() => this.toggleContent("Survey Insights")}>
                                    Survey Insights
                                </button>
                            </div>
                            <div class="column">
                                <button class={this.state.topic == "User Interviews" ? "topic-button-selected" : "topic-button"} onClick={() => this.toggleContent("User Interviews")}>
                                    User Interviews
                                </button>
                            </div>
                            <div class="column">
                                <button class={this.state.topic == "Market Research" ? "topic-button-selected" : "topic-button"} onClick={() => this.toggleContent("Market Research")}>
                                    Market Research
                                </button>
                            </div>
                        </div>
                        <div class="color-grape content">
                            <h2 id="topic-h2">{this.state.topic}</h2>
                            <p id="topic-p">{CONTENT[this.state.topic]}</p>
                        </div>
                    </div>
                    <div>
                       <h2 class="color-grape">COASST Partnership</h2>
                       <div class="color-grape content row-no-padding">
                           <div class="column">
                                <p>
                                    We wanted to find a citizen science project suitable for kids to learn science and contribute to the environment, which led us to finding the Coastal Observation and Seabird Survey Team (<a href="http://www.coasst.org" class="color-blue">COASST</a>) housed at the University of Washington. Throughout our project, we have been working closely with COASST researchers and their marine debris program to expand the audience of their program and provide students fun, interactive educational material in this subject area.
                                </p>
                            </div>
                            <div class="column">
                                <img class="responsive" src="images/coasst-logo.png" alt="Coastal Observation and Seabird Survey Team (COASST) logo"/>
                                <p class="color-grape text-center" id="caption">coasst.org</p>
                            </div>
                       </div>
                    </div>
                </div>

                <div class="section background-color-grape text-left">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Prototype Design and Iteration - </h1>
                        </div>
                    </div>
                    <div>
                        <h2 class="color-sand">Low-Fidelty Prototype</h2>
                        <div class="row-no-padding content">
                            <div class="column">
                                <p class="color-sand">Our first prototype was a comic of an animal encountering harmful debris with an interactive activity. We validated this concept with 7 kids from ages 7-12.</p>
                                <img class="responsive" id="concepts" src="images/concepts-low-fid.png" alt="Concepts to validate with the low-fidelity prototype"/>
                                <p class="color-sand">To evaluate our success, we created an interview script complete with pre-questions to understand the interviewees prior knowledge about marine animals and science research, along with post-questions and an activity to assess what they learned from the story. You can view the template here to the side.</p>
                                <p class="color-sand">Interviewing the kids gave us great feedback that we took into consideration when revising our design. Many said the activity was too easy and told us they already knew this content- to this we revised our storyline to include more complex words and topics. They also said they had lots of fun with the activity so we continued to add active engagement in the stories!</p>
                            </div>
                            <div class="column responsive">
                                <img src="images/low-fid-prototype.png" alt="Example scene from the low-fidelity prototype where Strawberry the Harbor Seal is introducing herself"/>
                                <p id="caption" class="color-sand text-center">Comic scene from low-fidelity prototype</p>
                                <iframe src="https://docs.google.com/document/d/e/2PACX-1vRjOVeqkZ2RmTWSQNc-L_oNHnJsQYh35BSlkcAgZPuw6IupcRtf9nQYhfmCgcXdpOFMs0RMizvlqGL1/pub?embedded=true" width="600" height="700"></iframe>
                                <p id="caption" class="color-sand text-center">Interview guide for user testing low-fidelity prototype</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="color-sand">High-Fidelty Prototype</h2>
                        <div class="row-no-padding content">
                            <div class="column">
                                <p class="color-sand">After several iterations incorporating the feedback, we created a high fidelity prototype with an updated story, a minigame, and a journal activity. We then returned to user testing to evaluate some similar concepts and a few new ones. If you’re curious, you can view our Figma prototype here:  <a class="color-blue" href="http://to.marinerescue.app/story">http://to.marinerescue.app/story</a></p>
                                <img class="responsive" id="concepts" src="images/concepts-high-fid.png" alt="Concepts to validate with the high-fidelity prototype"/>
                                <p class="color-sand">We revised our interview script to help us evaluate these concepts. In particular, we asked the kids directly what they learned from the story and from the minigame. We also revised the post-question activity to classify real marine debris with the vocabulary they learned from the story. Lastly, we asked them if they would be interested in learning about more animals. </p>
                                <p class="color-sand">We received great feedback on our concepts to test, and also noted the kids' overall enjoyment of our animations and designs.</p>
                            </div>
                            <div class="column responsive">
                                <img src="images/high-fid-prototype.png" alt="Example scene from the high-fidelity prototype where Strawberry the Harbor Seal is introducing herself"/>
                                <p id="caption" class="color-sand text-center">High-fidelity prototype story scene</p>
                                <iframe src="https://docs.google.com/document/d/e/2PACX-1vTgRrvZqTPA2pulaUn3QUzZlzxkb0k6S7VDta7n5bxIus0apj3TVQuqHUwI-Gv8CNgKGNtCvHLiHqDq/pub?embedded=true" width="600" height="700"></iframe>
                                <p id="caption" class="color-sand text-center">Revised interview guide for user testing high-fidelity prototype</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section background-color-sand text-left">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-blue">- Storytelling - </h1>
                        </div>
                    </div>
                    <div>
                        <div class="row-no-padding">
                            <div class="column content">
                                <p class="color-grape">For the stories, we decided to make Strawberry the Harbor Seal be a navigator for the user and guide them through a journey where they meet several of her friends and solve problems that mimic the real world.</p>
                                <p class="color-grape">Our original storyline involved Strawberry finding her friends all sick. Strawberry and the user would then go on a detective hunt to discover that her animal friends all were harmed by marine debris.</p>
                                <p class="color-grape">After sharing our storylines with the researchers at COASST to confirm everything was factually-correct, part of their feedback was for us to consider whether the storyline was too somber for our target user.</p>
                            </div>
                            <div class="column responsive">
                                <img src="images/meet-strawberry.png" alt="Scene from Meet Strawberry story showing Strawberry introducing herself as the navigator"/>
                                <p id="caption" class="color-grape text-center">Strawberry introduces herself in the first scene of the story</p>
                            </div>
                        </div>
                        <div class="row-no-padding">
                            <div class="column responsive">
                                <img src="images/proactive-strawberry.png" height="400" alt="Scene from Squawky story where Strawberry asks the user to help her stop Squawky from eating a lighter that looks similar to his usual meal of squid"/>
                                <p id="caption" class="color-grape text-center">Strawberry asks the user to help her stop Squawky from eating a lighter that looks similar to his usual meal of squid</p>
                            </div>
                            <div class="column content">
                                 <p class="color-grape">We took this feedback into consideration and decided to revise the stories to be more uplifting by giving the user the ability to proactively help Strawberry’s friends. This would also empower users through the game to use their knowledge and action to make a difference in the real world.</p>
                                <p class="color-grape">Through this Capstone project, our team has collaborated to create 4 unique storylines- 3 on marine debris, 1 on beach safety. We meticulously make sure that our ideas are feasible to create and implement, as well as are exciting for kids to learn. Writing is a collaborative process by all of our members and we make sure that each member and COASST researchers review the storyline before it is finalized.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section background-color-grape text-left">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Design Framework - </h1>
                        </div>
                    </div>
                    <div>
                        <h2 class="color-sand text-left">Style Guide</h2>
                        <div class="row-no-padding">
                            <div class="column content">
                                <p class="color-sand">On our website pages and modules, you can see a cohesive and distinct style that we’ve paid attention to based on our stlye guide. In our guide, we have typography, color palette, button designs, and logo to create our brand’s aesthetic. Having a designated style makes sure that our users will have a pleasant experience as they take in the imaginative setting that we put them in and allows for our elements to be consistent. </p>
                            </div>
                            <div class="column">
                                <iframe src="https://drive.google.com/file/d/1Ptt0t5vMeLaXCKK2VhvURmOcmdILz-Ot/preview" width="640" height="480"></iframe>
                                <p id="caption" class="color-sand text-center">Check out our style guide!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="color-sand">Illustrations/Backgrounds</h2>
                        <div class="content">
                            <p class="color-sand">We’ve also made many unique, illustrated assets that were made according to our scripts. A lot of detail has been put into the illustrations that’s pleasing to the eye and fits with our platform’s style. These illustrations have been iterated many times based on user feedback and general improvements </p>
                        </div>
                    </div>
                    {/* <div class="row">
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
                    </div> */}
                    <div>
                        <h2 class="color-sand">Characters</h2>
                        <div class="row-no-padding">
                            <div class="column content">
                                    <p class="color-sand">Each character has slightly different emotions that are shown depending on what’s happening in the story. These changes make our stories more immersive and interactive!</p>
                            </div>
                            <div class="column">
                                <img class="responsive" height="400" src="images/character-emotions2.png" alt="Showing four emotions for each marine animal, including neutral, love, and alarmed"/>
                                <p id="caption" class="color-sand text-center">Each marine animal has different emotions, including neutral, love, and alarmed!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section background-color-sand">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-blue">- Development Framework - </h1>
                        </div>
                    </div>
                    <div>
                        <h2 class="color-grape">Level Editor</h2>
                        <div class="row-no-padding">
                            <div class="column content">
                                <p class="color-grape">paragraph here</p>
                            </div>
                            <div class="column">
                                <p> img here </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="color-grape">Minigames</h2>
                        <div class="row-no-padding">
                            <div class="column">
                                <p>img here</p>
                            </div>
                            <div class="column content">
                                 <p class="color-grape">paragaph here</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section background-color-grape text-left">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Impact/Benefit - </h1>
                        </div>
                    </div>
                    <div class="content">
                        <p class="color-sand">Marine Rescue is a great resource for students to learn about the marine animals and understand the impact humans can have on these creatures. The marine debris stories take an active-learning approach to online games in order to effectively teach kids about the harmful effects of marine debris on animals. They learn research vocabulary along the way, which allows them to start making a difference from their computer by classifying real debris from Washington beaches in the debris classification game. Kids can round out their Marine Rescue adventures by learning about beach safety so they can be safe while taking action by cleaning up beaches nearby them. </p>

                        <p class="color-sand">Overall, Marine Rescue provides a holistic solution for the three main gaps we identified in early science learning:</p>
                        <div class="row">
                            <div class="column" id="width-30">
                                <img src="images/list-1.png" height="130" alt="List option 1 with yellow background color"/>
                            </div>
                            <div class="column" id="width-60">
                                <p class="color-sand">It incorporates active learning through minigames to help kids stay engaged, while also reinforcing their new knowledge</p> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="column" id="width-30">
                                <img src="images/list-2.png" height="130" alt="List option 2 with blue background color"/>
                            </div>
                            <div class="column" id="width-60">
                                <p class="color-sand">It allows kids to learn about a new science topic at home, and also gives parents an activity to engage with their kids- beach cleanups</p> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="column" id="width-30">
                                <img src="images/list-3.png" height="130" alt="List option 3 with sand background color"/>
                            </div>
                            <div class="column" id="width-60">
                                <p class="color-sand">It incorporates real-world pictures of debris from COASST’s Marine Debris program and gives kids an opportunity to practice contributing to citizen science</p> 
                            </div>
                        </div>
                        <p class="color-sand">Based on the user testing we have conducted, Marine Rescue activities are well-received and is an effective early science education platform for kids and parents alike. </p>
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
                    <div class="row">
                        <div class="column">
                            <div class="content">
                                <div class="container">
                                    <p class="color-purple text-center">“Capstone has exposed me to how to execute quality research and user interviews, as well as how to continuously edit the scope of a project. I also learned how to code a minigame, something I’ve never done before! ”</p>
                                    <p class="color-purple text-center">- Kiran</p>
                                </div>
                            </div>                            
                        </div>
                        {/* <div class="column">
                            <div class="content">
                                <div class="container">
                                    <p class="color-purple text-center">“”</p>
                                    <p class="color-purple text-center">- Andrey</p>
                                </div>
                            </div>                            
                        </div> */}
                    </div>
                </div>

                

                <div class="section section-footer">
                    <Footer></Footer>
                </div> 
            </main>
        );
    }
}

export default CapstonePage;