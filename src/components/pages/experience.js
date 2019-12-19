import React, { Component } from "react";
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { Animated } from "react-animated-css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHourglassHalf, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Experience extends Component {
    render() {
        return (
            <div className="experience-page">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="100">
                    <h1 className="mt-5 mb-5">Experience</h1>
                </Animated>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="400">
                    <Row className="d-block d-md-none block-bottom-margin">
                        <Col>
                            <ul class="timeline">
                                <li>
                                    <Row>
                                        <Col xs={12} className="experience-timeline-item-title">
                                            KWAN
                                        </Col>
                                        <Col xs={12} className="experience-timeline-item-dates">
                                            Nov 2016 – Dec 2019
                                        </Col>
                                        
                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faClock} /> Full-time
                                        </Col>
                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faHourglassHalf} /> 3 yrs 2 mos
                                        </Col>
                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Lisbon, PT
                                        </Col>

                                        <Col xs={12} className="experience-timeline-item-content">
                                            <p>- Backend development with PHP;</p>
                                            <p>- Database modeling; </p>
                                            <p>- SOAP and REST Api modeling and development; </p>
                                            <p>- Microservices with Laravel Framework based on the pattern CQRS; </p>
                                            <p>- Agile on SCRUM and Git workflow; </p>
                                            <p>- ETL processes with python; </p>
                                            <p>- Providing maintenance; </p>
                                            <p>- Frontend development with Angular;</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={12} className="experience-timeline-item-title">
                                            iGame
                                        </Col>
                                        <Col xs={12} className="experience-timeline-item-dates">
                                            Jun 2016 – Nov 2016
                                        </Col>
                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faClock} /> Full-time
                                        </Col>
                                        <Col xs={3} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faHourglassHalf} /> 6 mos
                                        </Col>
                                        <Col xs={5} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> St Julian's, MT
                                        </Col>

                                        <Col xs={12} className="experience-timeline-item-content">
                                            <p>- Developing high-quality and easily scalable websites in several markets worldwide;</p>
                                            <p>- Focus on implementation of interactive user interfaces, including mobile, using current web technologies;</p>
                                            <p>- Improving look and feel of sites as well as new features in backoffice;</p>
                                            <p>- Maintaining, improving and assuring quality of the sites and related services;</p>
                                            <p>- Integration and maintenance with third party providers;</p>
                                            <p>- Monitoring of the sites and services;</p>
                                            <p>- Ensuring 24/7 uptime and liaising with parties responsible to achieve constant uptime;</p>
                                            <p>- PHP 5.6.x with custom framework;</p>
                                            <p>- SOAP and REST Api modeling and development;</p>
                                            <p>- Mysql data modeling;</p>
                                            <p>- Software Architecture;</p>
                                            <p>- Converting static designs into live web pages and animations;</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={12} className="experience-timeline-item-title">
                                            Bit8
                                        </Col>
                                        <Col xs={12} className="experience-timeline-item-dates">
                                            Nov 2015 – May 2016
                                        </Col>

                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faClock} /> Full-time
                                        </Col>
                                        <Col xs={3} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faHourglassHalf} /> 7 mos
                                        </Col>
                                        <Col xs={5} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Gzira, MT
                                        </Col>

                                        <Col xs={12} className="experience-timeline-item-content">
                                            <p>- Development of features on products to the company using PHP 5.6, JavaScript, HTML5, CSS and SQL;</p>
                                            <p>- Providing maintenance, updates and bug fixes for live projects;</p>
                                            <p>- Production, research and development of application software run on a MySQL;</p>
                                            <p>- Scrum development methodology;</p>
                                            <p>- Using Bamboo to Continuous Integration;</p>
                                            <p>- The post mainly involves development on the bit8 platform frontend, user interfaces, and game engine;</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={12} className="experience-timeline-item-title">
                                            Futureway
                                        </Col>
                                        <Col xs={12} className="experience-timeline-item-dates">
                                            Oct 2013 – Oct 2015
                                        </Col>

                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faClock} /> Full-time
                                        </Col>
                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faHourglassHalf} /> 2 yrs 1 mo
                                        </Col>
                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Setúbal, PT
                                        </Col>

                                        <Col xs={12} className="experience-timeline-item-content">
                                            <p>- Developing frontend and backend of platform to support lawyers and all features about environment to them including control payments, time, files, contacts and legal actions;</p>
                                            <p>- Creating the backend using PHP 5.4.x based on MVC;</p>
                                            <p>- Creating the architecture of database system;</p>
                                            <p>- Scrum development methodology;</p>
                                            <p>- Using PHP, JavaScript, HTML5, CSS3, MySQL;</p>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={12} className="experience-timeline-item-title">
                                            Simbiotic
                                        </Col>
                                        <Col xs={12} className="experience-timeline-item-dates">
                                            May 2012 – Oct 2013
                                        </Col>

                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faClock} /> Full-time
                                        </Col>
                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faHourglassHalf} /> 1 yr 6 mos
                                        </Col>
                                        <Col xs={4} className="experience-timeline-item-feature mb-4">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Lisbon, PT
                                        </Col>

                                        <Col xs={12} className="experience-timeline-item-content">
                                            <p>- Cooperating with Business and UI/UX professionals;</p>
                                            <p>- Converting layout design with HTML, CSS, Javascript;</p>
                                            <p>- Implementing database structure;</p>
                                            <p>- Creating the backend using PHP 5.3.x based on MVC;</p>
                                            <p>- Developing of e-commerce, Portfolio and corporate websites;</p>
                                            <p>- Implementing different payment methods;</p>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <Row className="d-none d-md-block">
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
                                            <Row>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faClock} /> Full-time
                                                </Col>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faHourglassHalf} /> Nov 2016 – Dec 2019 (3 yrs 2 mos)
                                                </Col>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Lisbon, Portugal
                                                </Col>
                                                <Col xs={12} className="experience-item-content mb-4">
                                                    - Backend development with PHP; <br/>
                                                    - Database modeling; <br />
                                                    - SOAP and REST Api modeling and development; <br />
                                                    - Microservices with Laravel Framework based on the pattern CQRS; <br />
                                                    - Agile on SCRUM and Git workflow; <br />
                                                    - ETL processes with python; <br />
                                                    - Providing maintenance; <br />
                                                    - Frontend development with Angular;
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="igame">
                                            <Row>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faClock} /> Full-time
                                                </Col>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faHourglassHalf} /> Jun 2016 – Nov 2016 (6 mos)
                                                </Col>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> St Julian's, Malta
                                                </Col>
                                                <Col xs={12} className="experience-item-content mb-4">

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
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="bit8">
                                            <Row>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faClock} /> Full-time
                                                </Col>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faHourglassHalf} /> Nov 2015 – May 2016 (7 mos)
                                                </Col>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Gzira, Malta
                                                </Col>
                                                <Col xs={12} className="experience-item-content mb-4">
                                                    - Development of features on products to the company using PHP 5.6, JavaScript, HTML5, CSS and SQL; <br />
                                                    - Providing maintenance, updates and bug fixes for live projects; <br />
                                                    - Production, research and development of application software run on a MySQL; <br />
                                                    - Scrum development methodology; <br />
                                                    - Using Bamboo to Continuous Integration; <br />
                                                    - The post mainly involves development on the bit8 platform frontend, user interfaces, and game engine; <br />
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="futureway">
                                            <Row>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faClock} /> Full-time
                                                </Col>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faHourglassHalf} /> Oct 2013 – Oct 2015 (2 yrs 1 mo)
                                                </Col>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Setubal, Portugal
                                                </Col>
                                                <Col xs={12} className="experience-item-content mb-4">
                                                    - Developing frontend and backend of platform to support lawyers and all features about environment to them including control payments, time, files, contacts and legal actions; <br />
                                                    - Creating the backend using PHP 5.4.x based on MVC; <br />
                                                    - Creating the architecture of database system; <br />
                                                    - Scrum development methodology; <br />
                                                    - Using PHP, JavaScript, HTML5, CSS3, MySQL; <br />
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="simbiotic">
                                            <Row>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faClock} /> Full-time
                                                </Col>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faHourglassHalf} /> May 2012 – Oct 2013 (1 yr 6 mos)
                                                </Col>
                                                <Col xs={12} className="experience-item-feature mb-4">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Lisbon, Portugal
                                                </Col>
                                                <Col xs={12} className="experience-item-content mb-4">
                                                    - Cooperating with Business and UI/UX professionals; <br />
                                                    - Converting layout design with HTML, CSS, Javascript; <br />
                                                    - Implementing database structure; <br />
                                                    - Creating the backend using PHP 5.3.x based on MVC; <br />
                                                    - Developing of e-commerce, Portfolio and corporate websites; <br />
                                                    - Implementing different payment methods; <br />
                                                </Col>
                                            </Row>
                                        </Tab.Pane>                            
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Animated>
            </div>
        );
    }
}

export default Experience;