// Dependencies
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Col, Row, Card } from 'react-bootstrap'

// Custom Dependencies
import { userLogin } from '../../../actions/AuthAction'
import { MainContext } from '../../../context/MainContext'
import { LoginItem } from './LoginItem'

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
                <LoginItem
                  handleLogin={handleLogin}
                  user={{ userId: 1, name: 'Jordan' }}
                  img="https://randomuser.me/api/portraits/men/20.jpg"
                />

                <LoginItem
                  handleLogin={handleLogin}
                  user={{ userId: 2, name: 'Maria' }}
                  img="https://randomuser.me/api/portraits/women/2.jpg"
                />

                <LoginItem
                  handleLogin={handleLogin}
                  user={{ userId: 3, name: 'Pedro' }}
                  img="https://randomuser.me/api/portraits/men/14.jpg"
                />

                <LoginItem
                  handleLogin={handleLogin}
                  user={{ userId: 4, name: 'Carla' }}
                  img="https://randomuser.me/api/portraits/women/9.jpg"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
