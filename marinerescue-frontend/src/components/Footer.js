import React from 'react';
import { Link } from "react-router-dom";
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer class="marketing-page">
                <div class="row">
                    <div class="column column-navbar-logo">
                        <div class="navbar-logo">
                            <img src="/images/logo.png" />
                        </div>                            
                    </div>
                    <div class="column">                        
                        <h3 id="title">Marine Rescue</h3>
                        <h3>@2021 AppleJACK</h3>
                        <br></br>
                        <div class="row-no-padding misc">
                            <div class="column">
                                <a href="https://github.com/UW-AppleJACK/applejack"><img class="github-logo" src="/images/github-logo.png" alt="GitHub Logo"/></a>
                            </div>
                            <div class="column">
                                <Link to="/privacy"><h4 class="color-grape">Privacy Policy</h4></Link>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <a href="https://ischool.uw.edu/programs/informatics"><img class="footer-logo" src="/images/ischool-logo.png" alt="UW iSchool Logo" /></a>
                        <a href="https://coasst.org/"><img class="footer-logo" src="/images/coasst-logo.png" alt="COASST Logo" /></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;