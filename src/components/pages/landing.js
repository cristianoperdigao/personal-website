import React, { Component } from "react";
import { Button, Row, Col } from 'react-bootstrap';
import { Animated } from "react-animated-css";
class Landing extends Component {
    render() {
        return (
            <Row>
                <Col className="mt-5 landing-page" sm={8}>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="200">
                        <h1>Hi, my name is</h1>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="400">
                        <h2>Cristiano Perdigão.</h2>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="700">
                        <h3>I build things for the web.</h3>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="900">
                        <p>I'm a software engineer based in London, with passion in building (and occasionally designing) exceptional, high-quality websites and applications.</p>
                    </Animated>
                    <Animated animationIn="bounceIn" animationInDelay="1500">
                        <Button variant="outline-warning">Let's talk</Button>
                    </Animated>
                </Col>
            </Row>
        );
    }
}

export default Landing;