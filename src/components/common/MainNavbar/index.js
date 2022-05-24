// Dependencies
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LinkContainer } from 'react-router-bootstrap'
import { userLogout } from '../../../actions/AuthAction'
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  NavDropdown,
} from 'react-bootstrap'
import { MainContext } from '../../../context/MainContext'
import { useContext } from 'react'
import { movieLogout } from '../../../actions/MovieAction'

export const MainNavbar = () => {
  const { dispatch } = useContext(MainContext)
  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate()
  const styleActive = ({ isActive }) => {
    return 'nav-item nav-link ' + (isActive ? 'active' : '')
  }

  const onSubmit = (data) => {
    navigate(`/search?q=${data.searchText}`)
  }

  const handleOnBlur = () => {
    setValue('searchText', null)
  }

  const handleLogout = () => {
    userLogout(dispatch)
    // movieLogout(dispatch)
    navigate('/login', { replace: true })
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

            <Form
              className="d-flex justify-content-around"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Form.Control
                type="search"
                placeholder="Buscar por título"
                className="me-2"
                aria-label="Search"
                {...register('searchText', {
                  onBlur: handleOnBlur,
                })}
              />

              <Button className="btn btn-danger me-2" onClick={handleLogout}>
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
