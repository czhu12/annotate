import { useState } from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';

function Header() {
  const html = document.querySelector("html");
  const [isLight, setIsLight] = useState(html.getAttribute("data-bs-theme") === "light")
  
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavDropdown title="Settings" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" onClick={() => {
            if (isLight) {
              html.setAttribute("data-bs-theme", "dark");
            } else {
              html.setAttribute("data-bs-theme", "light");
            }
            setIsLight(!isLight);
          }}>
            {isLight && "Dark Mode"}
            {!isLight && "Light Mode"}
          </NavDropdown.Item>
        </NavDropdown>

      </Container>
    </Navbar>

  );
}

export default Header;
