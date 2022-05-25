// Dependencies
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container, Row, Card, Form, Button, Col, Alert } from 'react-bootstrap'

// Custom Dependencies
import { MainContext } from '../../../context/MainContext'
import { getMoviesByYear } from '../../../helpers/getMoviesByYear'
import { MovieItem } from '../../common/MovieItem'
import { InputForm } from '../../common/InputForm/InputForm'

export const MoviesYearPage = () => {
  const { movies, user } = useContext(MainContext)
  const [moviesList, setMoviesList] = useState([])
  const [loaded, setLoaded] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm()

  const onSubmit = (data) => {
    const year = parseInt(data.year)
    const movieList = getMoviesByYear(year, movies)
    if (movieList.length > 0) {
      setMoviesList(movieList)
    } else {
      setMoviesList([])
    }
    setLoaded(true)
  }

  const handleReturn = () => {
    setLoaded(false)
    reset()
  }

  return (
    <Col className="bg-dark">
      <h2 id="last-movies" className="text-center text-white mt-4">
        {loaded
          ? `Películas del Año ${getValues('year')}`
          : 'Películas por Año'}
      </h2>

      <Container className="p-4 bg-dark">
        {!loaded ? (
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card className="text-dark">
                <Form className="mx-3" onSubmit={handleSubmit(onSubmit)}>
                  <Card.Body className="animate__animated animate__fadeIn">
                    <InputForm
                      type="number"
                      name="year"
                      label="Año"
                      placeholder="Ingrese Año"
                      controlId="formBasicYear"
                      register={register}
                      errors={errors.year}
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
