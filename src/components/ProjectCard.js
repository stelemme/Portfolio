import { Card, Col, Row, Carousel } from "react-bootstrap";
import { useGetProjects } from "../hooks/useGetProjects"

// Deze component geeft alle project cards terug voor de bestaande projecten in de database.

export const ProjectCard = () => {

  // De bestaande projecten worden eerst ingelezen via een GET request van de solid server.
  const { projects } = useGetProjects()

  // Dit is de code die de cards afbeeldt op de home page via een map functie.
  return (
    <Row className="mb-4 mx-auto">
      {projects
        .slice(0)
        .reverse()
        .map((project) => (
          <Col md={12} key={project.id}>
            <Card className="mt-4 border-dark">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={project.foto1}
                    alt="Eerste slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={project.foto2}
                    alt="Tweede slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={project.foto3}
                    alt="Derde slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body className="border-top border-dark">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>Vak: {project.vak}</Card.Text>
                <Card.Text>Academiejaar: {project.jaar}</Card.Text>
                <Card.Text>{project.info}</Card.Text>
              </Card.Body>
              <Card.Footer className="border-dark">
                <small>
                  <Card.Link href="/vaardigheden" style={{ color: "black" }}>
                    Vaardigheden:
                  </Card.Link>{" "}
                  <small className="text-muted">{project.vaardigheden}</small>
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
    </Row>
  );
};
