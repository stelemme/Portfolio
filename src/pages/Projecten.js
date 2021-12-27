import { Container, Row, Button, Col } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";

// Deze functie geeft de lijst met projecten terug.
// Er is een button die doorverwijst naar de addProject page.

function Projecten() {
  return (
    <div className="mx-3 mb-3">
      <Container fluid>
        <Row className="border border-top-0 border-dark">
          <Col>
            <Button className="my-2" href="/AddProject" variant="dark">
              + Nieuw Project
            </Button>
          </Col>
        </Row>
        <Row className="border border-top-0 border-dark">
          <ProjectCard />
        </Row>
      </Container>
    </div>
  );
}

export default Projecten;
