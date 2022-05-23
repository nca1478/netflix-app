// Dependencies
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  NavDropdown,
} from 'react-bootstrap'

export const MainNavbar = () => {
  const styleActive = ({ isActive }) => {
    return 'nav-item nav-link ' + (isActive ? 'active' : '')
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-danger">
              NETFLIX
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink to="/" className={styleActive}>
                Home
              </NavLink>

              <NavDropdown title="Reportes" id="basic-nav-dropdown">
                <LinkContainer to="/tops">
                  <NavDropdown.Item>Peliculas Tops</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/anio">
                  <NavDropdown.Item>Peliculas x Año</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>

            <Form className="d-flex justify-content-around">
              <Form.Control
                type="search"
                placeholder="Buscar por título"
                className="me-2"
                aria-label="Search"
              />

              <Button to="/logout" className="btn btn-danger me-2">
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
