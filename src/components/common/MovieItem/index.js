// Dependencies
import { Col, Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

export const MovieItem = (props) => {
  const { id, title, img } = props

  const ratingChanged = (newRating) => {
    console.log(newRating)
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
                count={5}
                onChange={ratingChanged}
                size={30}
                activeColor="#bb2d3b"
                className="mb-0"
              />
            </div>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  )
}
