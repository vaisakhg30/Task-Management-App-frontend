import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <Navbar className="navbar navbar-dark bg-primary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://icon-library.com/images/task-icon-png/task-icon-png-20.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Task Management App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
