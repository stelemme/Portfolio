import { ListGroup } from "react-bootstrap";
import { useGetSkills } from "../hooks/useGetSkills"

// Deze component geeft alle vaardigheden in een list terug voor de bestaande vaardigeden in de database.

export const SkillList = () => {

  // De bestaande vaardigheden worden eerst ingelezen via een GET request van de solid server.
  const { skills } = useGetSkills()

  // Dit is de code die de vaardigheden afbeeldt op de vaardigheden page via een map functie.
  return (
    <ListGroup variant="flush" className="my-3">
      {skills.map((skill) => (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{skill.title}</div>
            - {skill.niveau}
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
