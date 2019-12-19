import React, { Component } from "react";
import { Row, Col, Button, Image } from 'react-bootstrap';
import { Animated } from "react-animated-css";

class Contact extends Component {
    render() {
        return (
            <Row>
                <Col className="contact-page">
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="200">
                        <h1 className="mt-5 mb-5">Get In Touch</h1>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="600">
                        <Row>
                            <Col xs={12} lg={6} className="d-flex align-self-center mt-2">
                                <p>
                                    I am not currently looking for full-time opportunities, <strong>but</strong> I am always open
                                    to collaborations and other fun stuff. If you’re interested in 
                                    discussing a project, making something great together, or simply getting in touch. <br/>
                                    
                                    <Button className="mt-4" href="https://www.linkedin.com/in/cristianoperdigao/" variant="outline-warning">Send me a message</Button>
                                </p>
                            </Col>
                        </Row>
                    </Animated>
                </Col>
            </Row>
        );
    }
}

export default Contact;