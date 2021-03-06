import { Container, Row } from "react-bootstrap";
import { ProjectForm } from "../components/ProjectForm";

// Deze functie geeft het formulier terug waarin projecten kunnen worden toegevoegd.

function AddProject() {
  return (
    <div className="mx-3 mb-3">
      <Container fluid>
        <Row className="border border-top-0 border-dark">
          <ProjectForm />
        </Row>
      </Container>
    </div>
  );
}

export default AddProject;
