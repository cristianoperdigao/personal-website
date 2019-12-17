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
                        <h2 className="mt-1">Cristiano Perdigão.</h2>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="700">
                        <h3 className="mt-5">I build things for the web.</h3>
                    </Animated>
                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="900">
                        <p className="mt-3">Currently based in London, UK as Full-Stack Developer.</p>
                    </Animated>
                    <Animated animationIn="bounceIn" animationInDelay="1500">
                        <Button className="mt-3" href="https://www.linkedin.com/in/cristianoperdigao/" variant="outline-warning">Let's talk</Button>
                    </Animated>
                </Col>
            </Row>
        );
    }
}

export default Landing;