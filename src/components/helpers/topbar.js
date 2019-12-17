import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function LayoutTopbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand className="custom-logo" href="/"><h1>_🚀</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="/about">
                        <span>01.</span>
                        about
                    </Nav.Link>
                    <Nav.Link href="/experience">
                        <span>02.</span>
                        experience
                    </Nav.Link>
                    <Nav.Link href="/work">
                        <span>03.</span>
                        work
                    </Nav.Link>
                    <Nav.Link href="/contact">
                        <span>04.</span>
                        contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default LayoutTopbar;