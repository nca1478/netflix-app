// Dependencies
import { useContext } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { MainContext } from '../../../context/MainContext'
import showcase from '../../../assets/img/showcase.svg'

export const Showcase = () => {
  const { user } = useContext(MainContext)

  return (
    <Col className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <Container>
        <Row className="d-sm-flex align-items-center justify-content-between">
          <Col>
            <h1>
              Hola {user.current.name}, aquí tienes Películas y series
              ilimitadas y <span className="text-danger">mucho más.</span>
            </h1>
            <p className="lead my-4">
              No te olvides de calificar la que más te guste.
            </p>

            <a href="#last-movies" className="btn btn-danger btn-lg">
              Ver Películas
            </a>
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
