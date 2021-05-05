import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './CapstonePage.scss';


class CapstonePage extends React.Component {
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

                <div class="section background-color-grape text-left">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Iteration - </h1>
                        </div>
                    </div>
                    <p class="color-sand">Our first prototype was a comic of an animal encountering harmful debris with an interactive activity. We validated this concept with 7 kids from ages 7-12.  </p>
                    <p class="color-sand">Through the low-fidelity prototype, we wanted to validate several concepts: kids are able to understand the story, we can teach kids to characterize debris and care about debris on the beach, kids can apply their knowledge by finding items with certain characteristics in their environment, and kids find the activity fun. To evaluate our success, we created an interview <a class="color-sand" href="https://docs.google.com/document/d/1qk3IyU7KotMuuKS6YCAqRylCI-_KK6hqUrhrkWnxnuk/edit">script</a> complete with pre-questions to understand the interviewees prior knowledge about marine animals and science research, along with post-questions and an activity to assess what they learned from the story.</p>
                    <p class="color-sand">Interviewing the kids gave us great feedback that we took into consideration when revising our design. Many said the activity was too easy and told us they already knew this content- to this we revised our storyline to include more complex words and topics. They also said they had lots of fun with the activity so we continued to add active engagement in the stories!</p>
                    <p class="color-sand">After several iterations incorporating the feedback, we created a high fidelity prototype with an updated story, a minigame, and a journal activity. If you’re curious, you can view our Figma prototype here:  <a class="color-sand" href="http://to.marinerescue.app/story">http://to.marinerescue.app/story</a> . We then returned to user testing to evaluate some similar concepts and a few new ones: kids are able to understand the story, we can teach kids to characterize debris and care about debris on the beach, kids have an understanding of their role and responsibility to support the marine ecosystem, and kids are able to navigate the UI of the stories. </p>
                    <p class="color-sand">We revised our interview script to help us evaluate these concepts. In particular, we asked the kids directly what they learned from the story and from the minigame. We also revised the post-question activity to classify real marine debris with the vocabulary they learned from the story. Lastly, we asked them if they would be interested in learning about more animals. </p>
                    <p class="color-sand">We received great feedback on our concepts to test, and also noted the kids' overall enjoyment of our animations and designs.</p>
                </div>

                <div class="section background-color-sand text-left">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-blue">- Storytelling - </h1>
                        </div>
                    </div>
                    <p class="color-grape">For the stories, we decided to make Strawberry the Harbor Seal be a navigator for the user and guide them through a journey where they meet several of her friends and solve problems that mimic the real world.</p>
                    <p class="color-grape">Our original storyline involved Strawberry finding her friends all sick. Strawberry and the user would then go on a detective hunt to discover that her animal friends all were harmed by marine debris. After sharing our storylines with the researchers at COASST to confirm everything was factually-correct, part of their feedback was for us to consider whether the storyline was too somber for our target user.</p>
                    <p class="color-grape">We took this feedback into consideration and decided to revise the stories to be more uplifting by giving the user the ability to proactively help Strawberry’s friends. This would also empower users through the game to use their knowledge and action to make a difference in the real world.</p>
                    <p class="color-grape">Through this Capstone project, our team has collaborated to create 4 unique storylines- 3 on marine debris, 1 on beach safety. We meticulously make sure that our ideas are feasible to create and implement, as well as are exciting for kids to learn. Writing is a collaborative process by all of our members and we make sure that each member and COASST researchers review the storyline before it is finalized.</p>
                </div>

                <div class="section background-color-grape text-left">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Impact/Benefit - </h1>
                        </div>
                    </div>
                    <p class="color-sand">Marine Rescue is a great resource for students to learn about the marine animals and understand the impact humans can have on these creatures. The marine debris stories take an active-learning approach to online games in order to effectively teach kids about the harmful effects of marine debris on animals. They learn research vocabulary along the way, which allows them to start making a difference from their computer by classifying real debris from Washington beaches in the debris classification game. Kids can round out their Marine Rescue adventures by learning about beach safety so they can be safe while taking action by cleaning up beaches nearby them. </p>
                    <p class="color-sand">Overall, Marine Rescue provides a holistic solution for the three main gaps we identified in early science learning:</p>
                    <ol />
                        <li class="color-sand">It incorporates active learning through minigames to help kids stay engaged, while also reinforcing their new knowledge</li>
                        <li class="color-sand">It allows kids to learn about a new science topic at home, and also gives parents an activity to engage with their kids- beach cleanups</li>
                        <li class="color-sand">It incorporates real-world pictures of debris from COASST’s Marine Debris program and gives kids an opportunity to practice contributing to citizen science</li>
                    <p class="color-sand">Based on the user testing we have conducted, Marine Rescue activities are well-received and is an effective early science education platform for kids and parents alike. </p>
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

                

                <div class="section section-footer">
                    <Footer></Footer>
                </div> 
            </main>
        );
    }
}

export default CapstonePage;