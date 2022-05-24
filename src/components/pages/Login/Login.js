// Dependencies
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Col, Row, Card } from 'react-bootstrap'

// Custom Dependencies
import { userLogin } from '../../../actions/AuthAction'
import { MainContext } from '../../../context/MainContext'

export const Login = () => {
  const { dispatch } = useContext(MainContext)
  const navigate = useNavigate()

  const handleLogin = (userData) => {
    userLogin(userData, dispatch)
    navigate('/', { replace: true })
  }

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center bg-dark">
      <Container className="p-4 animate__animated animate__fadeInDown">
        <Row className="text-center">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="bg-dark text-white py-3 border-0">
              <Card.Header as="h3" className="text-center border-0">
                Selecciona un Usuario
              </Card.Header>
              <Card.Body className="d-flex justify-content-center">
                <div
                  className="cursor-links m-2"
                  onClick={() => handleLogin({ userId: 1, name: 'Jordan' })}
                >
                  <img
                    src="https://randomuser.me/api/portraits/men/20.jpg"
                    className="img-thumbnail"
                    alt=""
                  />
                  <h5 className="mt-2">Jordan</h5>
                </div>

                <div
                  className="cursor-links m-2"
                  onClick={() => handleLogin({ userId: 2, name: 'Maria' })}
                >
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    className="img-thumbnail"
                    alt=""
                  />
                  <h5 className="mt-2">Maria</h5>
                </div>

                <div
                  className="cursor-links m-2"
                  onClick={() => handleLogin({ userId: 3, name: 'Pedro' })}
                >
                  <img
                    src="https://randomuser.me/api/portraits/men/14.jpg"
                    className="img-thumbnail"
                    alt=""
                  />
                  <h5 className="mt-2">Pedro</h5>
                </div>

                <div
                  className="cursor-links m-2"
                  onClick={() => handleLogin({ userId: 4, name: 'Carla' })}
                >
                  <img
                    src="https://randomuser.me/api/portraits/women/9.jpg"
                    className="img-thumbnail"
                    alt=""
                  />
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
