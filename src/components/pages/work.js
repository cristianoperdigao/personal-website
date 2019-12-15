import React, { Component } from "react";
import { Card, CardColumns } from 'react-bootstrap';
import { Animated } from "react-animated-css";

class Work extends Component {
    render() {
        return (
            <div className="work-page">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="0">
                    <h1 className="mt-5 mb-5">Work</h1>
                </Animated>
                <CardColumns>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="400">
                        <Card className="border-0">
                            <Card.Img variant="top" src="./assets/img/recipy.jpg" />
                            <Card.Body>
                                <Card.Title>Recipy</Card.Title>
                                <Card.Text>
                                    Discover recipes and how-tos based on the ingredients you have available.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <span className="mr-3">Javascript</span>
                                <span className="mr-3">React</span>
                                <span className="mr-3">Go</span>
                                <span className="mr-3">Gin</span>
                                <span className="mr-3">MySQL</span>
                            </Card.Footer>
                        </Card>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="800">
                        <Card className="border-0">
                            <Card.Img variant="top" src="./assets/img/swipedev.jpg" />
                            <Card.Body>
                                <Card.Title>Swipe Dev</Card.Title>
                                <Card.Text>
                                    Match with companies you know, share ideas, and build your career.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <span className="mr-3">Javascript</span>
                                <span className="mr-3">Ruby</span>
                                <span className="mr-3">Ruby on rails</span>
                                <span className="mr-3">MySQL</span>
                            </Card.Footer>
                        </Card>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="1100">
                        <Card className="border-0">
                            <Card.Img variant="top" src="./assets/img/leilaopublico.jpg" />
                            <Card.Body>
                                <Card.Title>Leilão Público</Card.Title>
                                <Card.Text>
                                    Portuguese online auction featuring a wide range of special objects.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <span className="mr-3">Javascript</span>
                                <span className="mr-3">PHP</span>
                                <span className="mr-3">React</span>
                                <span className="mr-3">Symfony</span>
                                <span className="mr-3">MySQL</span>
                            </Card.Footer>
                        </Card>
                    </Animated>
                </CardColumns>
            </div>
        );
    }
}

export default Work;