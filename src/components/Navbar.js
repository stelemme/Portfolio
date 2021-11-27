import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" className="border border-dark mx-3 mt-3">
                <Container fluid>
                <Navbar.Brand as={Link} to="/">Stef Lemmens</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/projecten">Projecten</Nav.Link>
                    <Nav.Link as={Link} to="/vaardigheden">Vaardigheden</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
