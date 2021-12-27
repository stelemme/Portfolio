import { FormPage } from "../components/ContactForm";
import { Maps } from "../components/GoogleMaps";
import { Container, Col, Row } from "react-bootstrap";

// Deze functie geeft de contact page terug.

function Contact() {
  return (
    <div className="mx-3">
      <Container fluid>
        <Row className="border border-top-0 border-dark">
          <Col className="my-3">
            <Row>
              <FormPage />
            </Row>
            <Row className="mt-4">
              <p>
                Stef Lemmens
                <br />
                stef.lemmens@ugent.be
                <br />
                Plateaustraat 22
                <br />
                9000 Gent
                <br />
                +32492967818
              </p>
            </Row>
          </Col>
          <Col className="mt-3">
            <Maps />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
