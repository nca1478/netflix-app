import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center bg-dark">
      <Container className="p-4">
        <Row className="text-center">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="bg-dark text-white py-3 border-0">
              <Card.Header as="h3" className="text-center border-0">
                Selecciona un Usuario
              </Card.Header>
              <Card.Body className="d-flex justify-content-center">
                <div className="m-2">
                  <Link to="/">
                    <img
                      src="https://randomuser.me/api/portraits/men/20.jpg"
                      className="img-thumbnail"
                      alt=""
                    />
                  </Link>

                  <h5 className="mt-2">Jordan</h5>
                </div>

                <div className="m-2">
                  <Link to="/">
                    <img
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      className="img-thumbnail"
                      alt=""
                    />
                  </Link>
                  <h5 className="mt-2">Maria</h5>
                </div>

                <div className="m-2">
                  <Link to="/">
                    <img
                      src="https://randomuser.me/api/portraits/men/14.jpg"
                      className="img-thumbnail"
                      alt=""
                    />
                  </Link>
                  <h5 className="mt-2">Pedro</h5>
                </div>

                <div className="m-2">
                  <Link to="/">
                    <img
                      src="https://randomuser.me/api/portraits/women/9.jpg"
                      className="img-thumbnail"
                      alt=""
                    />
                  </Link>
                  <h5 className="mt-2">Carla</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
