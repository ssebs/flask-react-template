import React from "react";
import { withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = (props) => {
    return (
        <Navbar
            bg="primary"
            variant="dark"
            className="mb-4"
            expand="md"
            sticky="top"
        >
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Flask React Template</Navbar.Brand>
                </LinkContainer>
                <Navbar.Text>{" | "}</Navbar.Text>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        justify
                        className="ml-auto d-flex align-items-center"
                        activeKey={props.location.pathname}
                        style={{ height: "32", maxHeight: "32" }}
                    >
                        <LinkContainer to="/">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Test">
                            <LinkContainer to="/test">
                                <NavDropdown.Item>Test!</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/test/query">
                                <NavDropdown.Item>Search</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default withRouter(Header);
