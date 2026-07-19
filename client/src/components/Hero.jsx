import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <div className="bg-light py-5 mb-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">
              Welcome to ShopEZ
            </h1>

            <p className="lead">
              Buy Electronics, Fashion, Mobiles, Shoes and much more at the
              best prices.
            </p>

            <Button variant="primary" size="lg">
              Shop Now
            </Button>
          </Col>

          <Col md={6} className="text-center">
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800"
              className="img-fluid rounded shadow"
              alt="Shopping"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;