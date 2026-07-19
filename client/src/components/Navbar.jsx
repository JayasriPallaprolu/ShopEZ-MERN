import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🛒 ShopEZ
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>

            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>

            <Button variant="warning">
              <FaShoppingCart /> Cart
            </Button>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    
  );
  <Nav.Link as={Link} to="/cart">
    Cart
</Nav.Link>

}

export default CustomNavbar;