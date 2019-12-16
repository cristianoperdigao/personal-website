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
                        Hello! I'm Cristiano, a software engineer based in London, who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
                    </p>
                </Animated>
                <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="400">
                    <p>
                        Shortly after studied from polytechnic institute of Setúbal, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
                    </p>
                </Animated>
                <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="800">
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                </Animated>
            </div>
        );
    }
}

export default About;