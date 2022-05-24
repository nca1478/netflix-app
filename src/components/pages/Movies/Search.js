// Dependencies
import { useCallback, useContext, useEffect, useState } from 'react'
import { Row, Col, Container, Alert } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

// Custom Depenpendies
import { getMoviesByTitle } from '../../../helpers/getMoviesByTitle'
import { MovieItem } from '../../common/MovieItem'
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
    [movies]
  )

  useEffect(() => {
    getMovies(q).catch(console.error)
  }, [q, getMovies])

  return (
    <Col className="bg-dark animate__animated animate__fadeIn">
      <h2 id="last-movies" className="text-center text-white mt-4 mb-4">
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
            </>
          )}
        </Row>
      </Container>
    </Col>
  )
}
