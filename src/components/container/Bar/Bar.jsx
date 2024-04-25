
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
const Bar = () => {
  return (
    <div>
      <Navbar expand="lg" className="nav bg-dark">
        <Container fluid>
          <Navbar.Brand className='ms-3 text-danger fw-bolder' href="/">
            Clothes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-danger" />
          <Navbar.Collapse id="basic-navbar-nav ms-auto me-md-0 d-flex align-items-center">
            <Nav
              className="ms-auto my-2 my-lg-0 fw-bold "
              navbarScroll
            >
              <Link className="ms-3 text-danger" to="/"> Home</Link>
              <Link className="ms-3 text-danger" to="/about">About</Link>
              <Link className="ms-3 text-danger" to="/contact">Contact</Link>
              <Link className="ms-3 text-danger" to="/songs">Songs</Link>
              <Link to="/login" className=' mx-3 text-danger fw-bolder'>Login</Link>
            </Nav>
    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Bar
