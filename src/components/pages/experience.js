import React, { Component } from "react";
import { Tab, Row, Col, Nav } from 'react-bootstrap';

class Experience extends Component {
    render() {
        return (
            <div className="experience-page">
                <Tab.Container id="left-tabs-example" defaultActiveKey="kwan">
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
                                    - Development of features on products to the company using PHP 5.6, JavaScript, HTML5, CSS and SQL; <br />
                                    - Providing maintenance, updates and bug fixes for live projects; <br />
                                    - Production, research and development of application software run on a MySQL; <br />
                                    - Scrum development methodology; <br />
                                    - Using Bamboo to Continuous Integration; <br />
                                    - The post mainly involves development on the bit8 platform frontend, user interfaces, and game engine; <br />
                                </Tab.Pane>
                                <Tab.Pane eventKey="futureway">
                                    - Developing frontend and backend of platform to support lawyers and all features about environment to them including control payments, time, files, contacts and legal actions; <br />
                                    - Creating the backend using PHP 5.4.x based on MVC; <br />
                                    - Creating the architecture of database system; <br />
                                    - Scrum development methodology; <br />
                                    - Using PHP, JavaScript, HTML5, CSS3, MySQL; <br />
                                </Tab.Pane>
                                <Tab.Pane eventKey="simbiotic">
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
            </div>
        );
    }
}

export default Experience;