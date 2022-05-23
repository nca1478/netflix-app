// Dependencies
import { Container } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div className="p-3 bg-dark text-white text-center">
      <Container>
        <p className="lead pt-3">
          Copyright &copy; 2022
          <br />
          Desarrollado por: <span className="text-danger">Jordan Camargo</span>
        </p>
      </Container>
    </div>
  )
}
