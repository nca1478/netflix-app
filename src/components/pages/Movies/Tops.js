// Dependencies
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container, Row, Card, Form, Button, Col, Alert } from 'react-bootstrap'

// Custom Dependencies
import { MainContext } from '../../../context/MainContext'
import { SelectForm } from '../../common/SelectForm/SelectForm'
import { ratingOptions } from '../../../data/selectOptions'
import { getMoviesByRating } from '../../../helpers/getMoviesByRating'
import { MovieItem } from '../../common/MovieItem'

export const MoviesTopsPage = () => {
  const { movies } = useContext(MainContext)
  const [ratingSelect, setRatingSelect] = useState(null)
  const [moviesList, setMoviesList] = useState([])
  const [loaded, setLoaded] = useState(false)

  const handleRatingChange = ({ value, label, rating }) => {
    setRatingSelect({ value, label, rating })
  }

  const { handleSubmit } = useForm()

  const onSubmit = () => {
    const rating = ratingSelect.rating
    const movieList = getMoviesByRating(rating, movies)
    if (movieList.length > 0) {
      setMoviesList(movieList)
    } else {
      setMoviesList([])
    }
    setLoaded(true)
  }

  const handleReturn = () => {
    setLoaded(false)
    setRatingSelect(null)
  }

  return (
    <Col className="bg-dark">
      <h2 id="last-movies" className="text-center text-white mt-4">
        Películas por Calificación
      </h2>
      <Container className="p-4 bg-dark">
        {!loaded ? (
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card className="text-dark">
                <Form className="mx-3" onSubmit={handleSubmit(onSubmit)}>
                  <Card.Body className="animate__animated animate__fadeIn">
                    <SelectForm
                      controlId="formBasicRating"
                      label="Seleccione una Calificación"
                      value={ratingSelect}
                      options={ratingOptions}
                      onChange={handleRatingChange}
                    />

                    <Button type="submit" variant="dark" className="w-100 mb-2">
                      Mostrar
                    </Button>
                  </Card.Body>
                </Form>
              </Card>
            </Col>
          </Row>
        ) : (
          <>
            <Row className="d-flex justify-content-center g-4 animate__animated animate__fadeIn">
              {moviesList.length > 0 ? (
                moviesList.map((movie) => {
                  return <MovieItem key={movie.id} {...movie} />
                })
              ) : (
                <>
                  <Alert variant="danger" className="w-75">
                    Oh no.... ¡No hay películas para mostrar!
                  </Alert>
                </>
              )}
            </Row>

            <hr className="mt-4" />
            <Row>
              <Col>
                <Button type="submit" variant="danger" onClick={handleReturn}>
                  {'<'} Regresar
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Col>
  )
}
