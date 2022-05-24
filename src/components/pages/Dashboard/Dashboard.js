import React, { useContext } from 'react'
import { Row, Col, Container, Alert } from 'react-bootstrap'
import { MainContext } from '../../../context/MainContext'
import { Footer } from '../../common/Footer'
import { MainNavbar } from '../../common/MainNavbar'
import { MovieItem } from '../../common/MovieItem'
import { Showcase } from '../../common/Showcase'

export const Dashboard = () => {
  const { movies, user } = useContext(MainContext)

  return (
    <div className="bg-dark">
      <MainNavbar />
      <Showcase />
      <Col className="bg-dark">
        <h2 id="last-movies" className="text-center text-white mt-5 mb-4">
          Últimas Peliculas
        </h2>
        <Container className="px-4">
          <Row className="d-flex justify-content-center g-4 pt-2 ">
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
        <Footer />
      </Col>
    </div>
  )
}
