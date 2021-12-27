import { Container, Col, Row, Image, Button } from "react-bootstrap";
import { ProjectCarousel } from "../components/ProjectCarousel";

// Deze functie geeft het home screen terug met daarop de info over mezelf.
// De buttons worden gelinkt naar de project en cantact page.

function Home() {
  return (
    <div className="mx-3 mb-3">
      <Container fluid>
        <Row className="border border-top-0 border-dark">
          <Col className="my-auto">
            <Row className="text-center my-3">
              <h1 style={{ fontSize: 30 }}>Welkom op mijn portfolio!</h1>
            </Row>
            <Row className="text-center my-2 mx-5">
              <p>
                Ik ben een student ingenieurswetenschappen architectuur aan de
                Ugent. Momenteel zit ik in het eerste jaar van mijn
                masteropleiding. Ik ben gepassioneerd door de bouwwereld,
                voornamelijk de digitale aspecten van de bouwwereld. Op deze
                site vindt u alle projecten die ik als student gemaakt heb. Ook
                vindt u er alle vaardigheden die ik bezit. Kijk gerust eens rond
                of contacteer mij indien u vragen heeft.
              </p>
            </Row>
            <Row className="my-4">
              <Col className="text-center">
                <Button href="/projecten" variant="dark">
                  Projecten
                </Button>{" "}
                <Button href="/contact" variant="dark">
                  Contacteer Mij
                </Button>
              </Col>
            </Row>
          </Col>
          <Col sm={4} className="mx-4 my-3">
            <Image
              className="my-4"
              src="http://localhost:5000/stef/data/Portret_foto.jpg"
              fluid
              rounded
            />
          </Col>
        </Row>
        <Row className="border border-top-0 border-dark">
          <ProjectCarousel />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
