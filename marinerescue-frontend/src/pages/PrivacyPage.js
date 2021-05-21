import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class PrivacyPage extends React.Component {
    render() {
        return (
            <main class="marketing-page">
                <NavBar></NavBar>
                <div class="section background-color-grape">
                    <div class="row">
                        <div class="column">
                            <h1 class="color-sunshine">- Privacy Policy - </h1>
                            <p class="color-sand content-no-margin">We take your privacy seriously.</p>
                            <p class="color-sand content-no-margin">Although kids practice contributing to citizen science on Marine Rescue, our main priority is educating kids on the impacts of marine debris on animals and the environment. Users are not be asked to create an account to access our website and we only collect minimum information needed for the service. No personal information (e.g. name, email) is recorded from our website.</p> 
                            <p class="color-sand content-no-margin">There are only two instances where we collect anonymous data:
                                <ol>
                                    <li>- In the classification activity, we collect the user’s submission for each classification task, but no user ID is stored. This data may later be used by university researchers.</li>
                                    <li>- We gather statistics on how many users play each story, but no user ID is stored. This data is used by Marine Rescue developers to measure our impact.</li>
                                </ol>
                            </p>
                            <p class="color-sand content-no-margin">If you have questions about this, please contact us through the information on our GitHub repository through the link in the footer below.</p>
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

export default PrivacyPage;