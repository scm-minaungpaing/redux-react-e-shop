import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useSelector } from  'react-redux'
import { Link } from 'react-router-dom'

const Nabvar = () => {
    const state = useSelector((state) => state.handleCart)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow-sm'>
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold fs-4'>MAP COLLECTION</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fs-6">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/product">Product</Nav.Link>
                            <Nav.Link as={Link} to="/about" eventKey="about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact" eventKey="contact">Contact</Nav.Link>
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
                            <Nav.Link as={Link} to="/cart">
                                <Button variant="outline-dark">
                                <i className="fa-solid fa-cart-plus ms-2"></i> Cart ( { state.length} )
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