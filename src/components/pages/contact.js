import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import { Animated } from "react-animated-css";

class Contact extends Component {
    render() {
        return (
            <Row>
                <Col className="landing-page">
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="200">
                        <h1 className="mt-5 mb-5">Get In Touch</h1>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="600">
                        <p>Cristiano is not currently looking for full-time opportunities, but is always open to collaborations and other fun stuff. If you’re interested in discussing a project, making something great together, or simply getting in touch.</p>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="900">
                        <p>Portfolio, character references, and other information available on request via email.</p>
                    </Animated>
                </Col>
            </Row>
        );
    }
}

export default Contact;