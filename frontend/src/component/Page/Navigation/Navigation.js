import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container className='container-nav'>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
          <Nav.Link href="/ ">Home</Nav.Link>
            <Nav.Link href="/Social-Medias">Social Medias</Nav.Link>
            <Nav.Link href="/Games">Games</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
            <Nav.Link href="/Market-History">Market History</Nav.Link>
            <Nav.Link href="/Leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="/USRGG-Store">USRGG Store</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;