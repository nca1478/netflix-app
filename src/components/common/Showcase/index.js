// Dependencies
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

// Custom Dependencies
import showcase from '../../../assets/img/showcase.svg'

export const Showcase = () => {
  return (
    <Col className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <Container>
        <Row className="d-sm-flex align-items-center justify-content-between">
          <Col>
            <h1>
              Películas y series ilimitadas y{' '}
              <span className="text-danger">mucho más.</span>
            </h1>
            <p className="lead my-4">
              Disfruta donde quieras. Cancela cuando quieras.
            </p>

            <a href="#last-movies" className="btn btn-danger btn-lg">
              Ver Películas
            </a>

            {/* <Link to="/offers" className="btn btn-danger btn-lg">
              Ver Películas Disponibles
            </Link> */}
          </Col>
          <img
            className="img-fluid w-50 d-none d-md-block"
            src={showcase}
            alt="showcase"
          />
        </Row>
      </Container>
    </Col>
  )
}
