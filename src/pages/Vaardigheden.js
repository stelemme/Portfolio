import { Container, Row, Accordion } from "react-bootstrap";
import { SkillList } from "../components/SkillList";
import { SkillForm } from "../components/SkillForm";

// Deze functie geeft de lijst met vaardigheden terug.

function Vaardigheden() {
  return (
    <div className="mx-3 mb-3">
      <Container fluid>
        <Row className="border border-top-0 border-dark">
          <SkillList />
          <Accordion className="mb-3">
            <Accordion.Item eventKey="1">
              <Accordion.Header>+ Nieuwe Vaardigheid</Accordion.Header>
              <Accordion.Body>
                <SkillForm />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </div>
  );
}

export default Vaardigheden;
