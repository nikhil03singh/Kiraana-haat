import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, FormFeedback, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { isEmail } from 'validator';    

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalLoginOpen: false,
            isModalRegisterOpen: false,
            data: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errors: {},
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModalLogin = this.toggleModalLogin.bind(this);
        this.toggleModalRegister = this.toggleModalRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModalLogin() {
        this.setState({
            isModalLoginOpen: !this.state.isModalLoginOpen
        });
    }

    toggleModalRegister() {
        this.setState({
            isModalRegisterOpen: !this.state.isModalRegisterOpen
        });
    }

    handleLogin(event) {
        this.toggleModalLogin();
        alert(
            "Username/Email: " +
            this.username.value +
            " Password: " +
            this.password.value +
            " Remember: " +
            this.remember.checked
        );
        event.preventDefault();
    }
    
    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.firstName === '') errors.firstName = 'First Name can not be blank.';
        if (data.lastName === '') errors.lastName = 'Last Name can not be blank.';
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if (data.password === '') errors.password = 'Password must be valid.';
        if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';

        return errors;
    }

    handleSubmit = (e) => {
        this.toggleModalRegister();
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            this.setState(this.state);
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <Navbar dark expand="md">
                <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img
                                src="assets/images/logo.png"
                                height="50"
                                width="61"
                                alt="Kiraana Haat"
                            />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/pricing"> Pricing
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services"> Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/resources"> Resources
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/faqs"> FAQs
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button className="outline-dark" color="outline-dark" outline onClick={this.toggleModalRegister}>
                                        <span className="fa fa-sign-in fa-lg" /> SignUp
                                    </Button>
                                </NavItem>
                            </Nav>
                            <Nav className="ml" navbar>
                                <NavItem>
                                    <Button className="outline-dark" color="outline-dark" outline onClick={this.toggleModalLogin}>
                                         SignIn
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
                <Modal isOpen={this.state.isModalLoginOpen} toggle={this.toggleModalLogin}>
                    <ModalHeader toggle={this.toggleModalLogin}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    innerRef={input => (this.username = input)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    innerRef={input => (this.password = input)}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        name="remember"
                                        innerRef={input => (this.remember = input)}
                                    />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
                
                <Modal isOpen={this.state.isModalRegisterOpen} toggle={this.toggleModalRegister}>
                    <ModalHeader toggle={this.toggleModalRegister}>Register</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input id="firstName" value={data.firstName} invalid={errors.firstName ? true : false} name="firstName" onChange={this.handleChange} />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input id="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name="lastName" onChange={this.handleChange} />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input id="confirmPassword" value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
                                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                                </FormGroup>

                                <Button type="submit" value="submit" color="primary">
                                    Register
                                </Button>
                            </Form>
                        </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default Header;