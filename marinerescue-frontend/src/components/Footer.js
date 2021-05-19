import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div class="row">
                    <div class="column">
                        <div class="navbar-logo">
                            <img src="images/logo.png" />
                            {/* add GitHub logo here */}
                            {/* add YouTube logo here */}
                        </div>                            
                    </div>
                    <div class="column">
                        <h3>@2021 AppleJACK</h3>
                    </div>
                    <div class="column">
                        <a href="https://ischool.uw.edu/programs/informatics"><img class="footer-logo" src="images/ischool-logo.png" alt="UW iSchool Logo" /><br /></a>
                        <a href="https://coasst.org/"><img class="footer-logo" src="images/coasst-logo.png" alt="COASST Logo" /></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;