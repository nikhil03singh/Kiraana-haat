import React, { useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, 
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import firebase from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    let dispatch = useDispatch();
    let { user } = useSelector((state) => ({ ...state }));
    let history = useHistory();

    const toggle = () =>{ 
        setIsOpen(!isOpen);
        setDropdownOpen(prevState => !prevState);
        }
    const logout = () => {
        firebase.auth().signOut();
        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        history.push("/login")
    };

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
                                {!user &&(
                                    <NavItem>
                                        <NavLink href="/login" className="fa fa-sign-in" style={{ textDecoration: 'none',
                                            color: "white" }}>
                                            &nbsp; Login
                                        </NavLink>
                                    </NavItem>
                                )}
                                {user && (
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle}  >
                                        <DropdownToggle caret >
                                            {user.email && user.email.split("@")[0]}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="/dashboard"className="fa fa-user " style={{ textDecoration: 'none',
                                                    color: "black"}}>                       
                                                &nbsp;Dashboard      
                                            </DropdownItem>
                                            <DropdownItem href="/inventory" className="fa fa-file-text" style={{ textDecoration: 'none',
                                                    color: "black"}}>                       
                                                &nbsp;Manage Inventory      
                                            </DropdownItem>
                                            <DropdownItem onClick={logout} className="fa fa-sign-out">
                                                &nbsp;Logout
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                )}                                
                            </Nav>  
                        </Collapse>
                    </div>
                </Navbar>                
        </div>
        );
    }

export default Header;