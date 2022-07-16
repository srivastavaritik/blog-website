import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({isAuth, setIsAuth}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Extra-Blog
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav></Nav>
          <Nav>
            <Nav.Link>
              <Link
                to="/createpost"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Create a Post
              </Link>
            </Nav.Link>
            <Nav.Link>
              {!isAuth && (
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              )}
            </Nav.Link>
            <Nav.Link>
              {isAuth && (
                <a
                  onClick={() => {
                    setIsAuth(false);
                    console.log(isAuth);
                  }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Log Out
                </a>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
