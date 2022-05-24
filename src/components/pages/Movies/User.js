// Dependencies
import { useCallback, useContext, useEffect, useState } from 'react'
import { Row, Col, Container, Alert } from 'react-bootstrap'
import { MainNavbar } from '../../common/MainNavbar'
import { Footer } from '../../common/Footer'
import { MovieItem } from '../../common/MovieItem'
import { SpaceBlank } from '../../common/SpaceBlank/SpaceBlank'
import { getMoviesByUser } from '../../../helpers/getMoviesByUser'
import { MainContext } from '../../../context/MainContext'

export const MoviesUserPage = () => {
  const { movies, user } = useContext(MainContext)
  const [moviesList, setMoviesList] = useState([])

  const getMovies = useCallback(
    async (userId) => {
      const movieList = getMoviesByUser(userId, movies)
      if (movieList.length > 0) {
        setMoviesList(movieList)
      } else {
        setMoviesList([])
      }
    },
    [movies]
  )

  useEffect(() => {
    getMovies(user.current.userId).catch(console.error)
  }, [getMovies, user])

  return (
    <div className="bg-dark">
      <MainNavbar />
      <Col className="bg-dark">
        <h2 id="last-movies" className="text-center text-white mt-5 mb-4">
          Películas Calificadas por {user.current.name}
        </h2>
        <Container className="px-4">
          <Row className="d-flex justify-content-center g-4 pt-2 ">
            {moviesList.length > 0 ? (
              moviesList.map((movie) => {
                return <MovieItem key={movie.id} {...movie} />
              })
            ) : (
              <>
                <Alert variant="danger" className="w-75">
                  Oh no.... ¡No hay películas para mostrar!
                </Alert>
                <SpaceBlank height="40vh" />
              </>
            )}
          </Row>
        </Container>
      </Col>
      <Footer />
    </div>
  )
}
