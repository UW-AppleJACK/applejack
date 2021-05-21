import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer class="marketing-page">
                <div class="row">
                    <div class="column">                        
                    </div>
                    <div class="column">
                        <h3>Connect with us: </h3>
                        <img id="icon" src="/images/youtube-logo.png" alt="Youtube Logo" /><br />
                    </div>
                    <div class="column">
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="navbar-logo">
                            <img src="/images/logo.png" />
                        </div>                            
                    </div>
                    <div class="column">
                        <h3>@2021 AppleJACK</h3>
                    </div>
                    <div class="column">
                        <img id="icon" src="/images/ischool-logo.png" alt="UW iSchool Logo" /><br />
                        <img id="icon" src="/images/coasst-logo.png" alt="COASST Logo" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;