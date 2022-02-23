import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Nabvar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow-sm'>
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold fs-4'>MAP COLLECTION</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fs-6">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/product">Product</Nav.Link>
                            <Nav.Link eventKey="about" href="/about">About</Nav.Link>
                            <Nav.Link eventKey="contact" href="/contact">Contact</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>                            
                            <Nav.Link href="#login">
                                <Button variant="outline-dark">
                                    <i className="fa-solid fa-right-to-bracket"></i> Login
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="#login">
                                <Button variant="outline-dark">
                                    <i className="fa-solid fa-user-plus ms-2"></i> Register
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="#login">
                                <Button variant="outline-dark">
                                <i className="fa-solid fa-cart-plus ms-2"></i> Cart
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Nabvar