import React, { Component } from "react";
import { Card, CardColumns } from 'react-bootstrap';
import { Animated } from "react-animated-css";

class Work extends Component {
    render() {
        return (
            <div className="work-page">
                <h1>Some Things I've Built</h1>
                <CardColumns>
                    <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDelay="100">
                        <Card>
                            <Card.Img variant="top" src="https://i0.wp.com/omeubau.net/wp-content/uploads/2014/09/google_imagens.jpg" />
                            <Card.Body>
                                <Card.Title>Google Engine</Card.Title>
                                <Card.Text>
                                    A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <span className="mr-3">Next.js</span>
                                <span className="mr-3">Chart.js</span>
                                <span>GitHub API</span>
                            </Card.Footer>
                        </Card>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="600">
                        <Card>
                            <Card.Body>
                                <Card.Title>Spotify Web Player</Card.Title>
                                <Card.Text>
                                    A nicer look at your GitHub profile and repo stats. 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <span className="mr-3">Next.js</span>
                                <span className="mr-3">Chart.js</span>
                                <span>GitHub API</span>
                            </Card.Footer>
                        </Card>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="700">
                        <Card bg="warning" text="white" className="text-center p-3">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.
                                </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="800">
                        <Card>
                            <Card.Body>
                                <Card.Title>uTube Tools</Card.Title>
                                <Card.Text>
                                    Python Script with a few tools to handle youtube videos from the list 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <span>Python</span>
                            </Card.Footer>
                        </Card>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="1000">
                        <Card>
                            <Card.Body>
                                <Card.Title>Webcrawler Stackoverflow</Card.Title>
                                <Card.Text>
                                    Python script to captures data from questions of stackoverflow and save the information in MySQL database.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <span>Python</span>
                            </Card.Footer>
                        </Card>
                    </Animated>
                </CardColumns>
            </div>
        );
    }
}

export default Work;