import React, { Component } from "react";
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { Animated } from "react-animated-css";

class Experience extends Component {
    render() {
        return (
            <div className="experience-page mb-5">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="100">
                    <h1 className="mt-5 mb-5">Experience</h1>
                </Animated>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="400">
                    <Tab.Container id="left-tabs" defaultActiveKey="kwan">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="kwan">Kwan</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="igame">iGame</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="bit8">Bit8</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="futureway">Futureway</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="simbiotic">Simbiotic</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="kwan">
                                        KWAN Full-time <br/>
                                        Dates Employed: Nov 2016 – Dec 2019 <br/>
                                        Employment Duration: 3 yrs 2 mos <br/>
                                        Location: Lisbon Area, Portugal <br/><br/>


                                        - Backend development with PHP; <br/>
                                        - Database modeling; <br />
                                        - SOAP and REST Api modeling and development; <br />
                                        - Microservices with Laravel Framework based on the pattern CQRS; <br />
                                        - Agile on SCRUM and Git workflow; <br />
                                        - ETL processes with python; <br />
                                        - Providing maintenance; <br />
                                        - Frontend development with Angular;
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="igame">
                                        iGame Full-time<br />
                                        Dates Employed: Jun 2016 – Nov 2016<br />
                                        Employment Duration: 6 mos<br />
                                        Location: St Julian's, Malta<br /><br />


                                        - Developing high-quality and easily scalable websites in several markets worldwide; <br />
                                        - Focus on implementation of interactive user interfaces, including mobile, using current web technologies; <br />
                                        - Improving look and feel of sites as well as new features in backoffice; <br />
                                        - Maintaining, improving and assuring quality of the sites and related services; <br />
                                        - Integration and maintenance with third party providers; <br />
                                        - Monitoring of the sites and services; <br />
                                        - Ensuring 24/7 uptime and liaising with parties responsible to achieve constant uptime; <br />
                                        - PHP 5.6.x with custom framework; <br />
                                        - SOAP and REST Api modeling and development; <br />
                                        - Mysql data modeling; <br />
                                        - Software Architecture; <br />
                                        - Converting static designs into live web pages and animations; <br />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="bit8">
                                        Bit8 Full-time<br />
                                        Dates Employed: Nov 2015 – May 2016<br />
                                        Employment Duration: 7 mos<br />
                                        Location: Gzira, Malta<br /><br />


                                        - Development of features on products to the company using PHP 5.6, JavaScript, HTML5, CSS and SQL; <br />
                                        - Providing maintenance, updates and bug fixes for live projects; <br />
                                        - Production, research and development of application software run on a MySQL; <br />
                                        - Scrum development methodology; <br />
                                        - Using Bamboo to Continuous Integration; <br />
                                        - The post mainly involves development on the bit8 platform frontend, user interfaces, and game engine; <br />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="futureway">
                                        Futureway Full-time<br />
                                        Dates Employed: Oct 2013 – Oct 2015<br />
                                        Employment Duration: 2 yrs 1 mo<br />
                                        Location: Setubal, Portugal<br /><br />
                                        
                                        - Developing frontend and backend of platform to support lawyers and all features about environment to them including control payments, time, files, contacts and legal actions; <br />
                                        - Creating the backend using PHP 5.4.x based on MVC; <br />
                                        - Creating the architecture of database system; <br />
                                        - Scrum development methodology; <br />
                                        - Using PHP, JavaScript, HTML5, CSS3, MySQL; <br />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="simbiotic">

                                        Simbiotic Full-time<br />
                                        Dates Employed: May 2012 – Oct 2013<br />
                                        Employment Duration: 1 yr 6 mos<br />
                                        Location: Lisbon Area, Portugal<br /><br />

                                        - Cooperating with Business and UI/UX professionals; <br />
                                        - Converting layout design with HTML, CSS, Javascript; <br />
                                        - Implementing database structure; <br />
                                        - Creating the backend using PHP 5.3.x based on MVC; <br />
                                        - Developing of e-commerce, Portfolio and corporate websites; <br />
                                        - Implementing different payment methods; <br />
                                    </Tab.Pane>                            
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Animated>
            </div>
        );
    }
}

export default Experience;