import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

// Deze component geeft alle vaardigheden in een list terug voor de bestaande vaardigeden in de database.

export const SkillList = () => {
  const [skills, setSkills] = useState([]);

  // De bestaande vaardigheden worden eerst ingelezen via een GET request van de solid server.
  useEffect(() => {
    async function fetchData(e) {
      const requestOptions = {
        methode: "GET",
      };
      const data = await fetch(
        "http://localhost:5000/stef/data/skills.json",
        requestOptions
      );
      const body = await data.json();
      setSkills(body);
    }
    fetchData();
  }, []);

  console.log(skills);

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
