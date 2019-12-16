import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Button } from 'react-bootstrap';

class About extends Component {
    render() {
        return(
            <div className="about-page">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="0">
                    <h1 className="mt-5 mb-5">About</h1>
                </Animated>
                <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="200">
                    <p>
                        Hello! I'm Cristiano, a Full-Stack Developer based in London, who enjoys building things that live on the internet. 
                    </p>
                </Animated>
                <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="400">
                    <p>
                        I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
                    </p>
                </Animated>
            </div>
        );
    }
}

export default About;