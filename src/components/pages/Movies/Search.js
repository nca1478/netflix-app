// Dependencies
import queryString from 'query-string'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Row, Col, Container, Alert } from 'react-bootstrap'
import { MainNavbar } from '../../common/MainNavbar'
import { Footer } from '../../common/Footer'
import { getMoviesByTitle } from '../../../helpers/getMoviesByTitle'
import { MovieItem } from '../../common/MovieItem'
import { SpaceBlank } from '../../common/SpaceBlank/SpaceBlank'
import { MainContext } from '../../../context/MainContext'

export const SearchPage = () => {
  const location = useLocation()
  const { movies, user } = useContext(MainContext)
  const [moviesList, setMoviesList] = useState([])
  const { q = '' } = queryString.parse(location.search)

  const getMovies = useCallback(
    async (q) => {
      const movieList = getMoviesByTitle(q, movies)
      if (movieList.length > 0) {
        setMoviesList(movieList)
      } else {
        setMoviesList([])
      }
    },
    [q]
  )

  useEffect(() => {
    getMovies(q).catch(console.error)
  }, [getMovies])

  return (
    <div className="bg-dark">
      <MainNavbar />
      <Col className="bg-dark">
        <h2 id="last-movies" className="text-center text-white mt-5 mb-4">
          Películas Encontradas
        </h2>
        <Container className="px-4">
          <Row className="d-flex justify-content-center g-4 pt-2 ">
            {moviesList.length > 0 ? (
              moviesList.map((movie) => {
                return (
                  <MovieItem
                    key={movie.id}
                    userIdLogged={user.current.userId}
                    {...movie}
                  />
                )
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
