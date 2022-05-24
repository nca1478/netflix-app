// Dependencies
import React, { useContext } from 'react'
import { Row, Col, Container, Alert } from 'react-bootstrap'

// Custom Dependencies
import { MainContext } from '../../../context/MainContext'
import { MovieItem } from '../../common/MovieItem'

export const HomePage = () => {
  const { movies, user } = useContext(MainContext)

  return (
    <div id="last-movies" className="pt-1">
      <Col className="bg-dark">
        <h2 className="text-center text-white mt-5 mb-4">Últimas Peliculas</h2>
        <Container className="px-4">
          <Row className="d-flex justify-content-center g-4 pt-2 animate__animated animate__fadeIn">
            {movies.length > 0 ? (
              movies.map((movie) => {
                return (
                  <MovieItem
                    key={movie.id}
                    userIdLogged={user.current.userId}
                    {...movie}
                  />
                )
              })
            ) : (
              <Alert variant="danger" className="w-75">
                Oh no.... ¡No hay películas para mostrar!
              </Alert>
            )}
          </Row>
        </Container>
      </Col>
    </div>
  )
}
