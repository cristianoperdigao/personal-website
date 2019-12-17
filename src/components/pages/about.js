import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

class About extends Component {
    render() {
        return(
            <div className="about-page">
                <Row>
                    <Col xs={12} lg={12} className="mt-2">
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="0">
                            <h1 className="mt-5 mb-5">About</h1>
                        </Animated>
                    </Col>
                    <Col xs={12} lg={6} className="mt-2">
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="200">
                            <p>
                            Hi! I’m Cristiano Perdigão, an Full-Stack developer.
                            </p>
                        </Animated>
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="400">
                            <p>
                            An Portuguese living in London,UK. I can help developers, companies and individuals bring their dreams to life on the web.
                            </p>
                        </Animated>
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="600">
                            <p>
                                I develop exceptional websites and web apps that provide intuitive, user interfaces with efficient and modern backends.
                            </p>
                        </Animated>
                    </Col>
                </Row>
                <Row className="mt-2 about-me-social-networks-container d-block d-sm-none">
                    <Col className="ml-0 d-flex">
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="800">
                            <a href="https://github.com/cristianoperdigao" target="_blank" rel="nofollow noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </Animated>
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="900">
                            <a href="https://www.linkedin.com/in/cristianoperdigao/" target="_blank" rel="nofollow noopener noreferrer" aria-label="Linkedin">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </Animated>
                        <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="1000">
                            <a href="https://twitter.com/cristianodpp" target="_blank" rel="nofollow noopener noreferrer" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </Animated>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;