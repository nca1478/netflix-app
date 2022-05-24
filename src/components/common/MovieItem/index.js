// Dependencies
import { useContext } from 'react'
import { Col, Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

// Custom Dependencies
import { movieUpdateRating } from '../../../actions/MovieAction'
import { MainContext } from '../../../context/MainContext'

export const MovieItem = (props) => {
  const { dispatch } = useContext(MainContext)
  const { userIdLogged, id, rating, img, edit } = props

  const ratingChanged = (newRating) => {
    movieUpdateRating({ id, newRating, userIdLogged }, dispatch)
  }

  return (
    <Col xs={10} sm={10} md={6} lg={3}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Footer className="text-center">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <span className="fw-bold">Calificar: </span>
            <div>
              <ReactStars
                value={rating}
                count={5}
                onChange={ratingChanged}
                size={30}
                activeColor="#bb2d3b"
                className="mb-0"
                edit={edit}
              />
            </div>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  )
}
