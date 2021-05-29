import React, { useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={toggle} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img
                                src="assets/images/logo.png"
                                height="50"
                                width="61"
                                alt="Kiraana Haat"
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink  href="/pricing"> Pricing
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/services"> Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/resources"> Resources
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  href="/faqs"> FAQs
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/login"  className="outline-dark" style={{ textDecoration: 'none',
                                color: "fade white" }}>
                                        LOGIN
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
        </div>
        );
    }


export default Header;