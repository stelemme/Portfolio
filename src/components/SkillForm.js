import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

// Deze component zorgt ervoor dat de nieuwe vaardigheid kan worden toegevoegd.

export const SkillForm = () => {
  // De constanten worden geïnitieerd.
  const [title, setTitle] = useState("");
  const [niveau, setNiveau] = useState("");
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

  // Deze async functie wordt uitgevoerd wanneer het vaardigheid formulier wordt ingediend.
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      alert(`De vaardigheid is nu toegevoegd. Bedankt.`);

      // Elke vaardigheid krijgt een unieke ID.
      const id = skills.length + 1;
      
      // De nieuwe vaardigheid wordt in een constante gestoken en bij de al bestaande vaardigheden gevoegd.
      const skill = {
        title,
        niveau,
        id,
      };
      skills.push(skill);
      
      // Alle vaardigheden (bestaande + nieuwe) worden via een PUT request naar de solid server gestuurd.
      var requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(skills),
        redirect: "follow",
      };
      console.log("data send");

      await fetch(
        "http://localhost:5000/stef/data/skills.json",
        requestOptions
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Dit is de code voor het formulier waar de nieuwe vaardigheid wordt ingevoerd.
  return (
    <Form>
      <Form.Group className="my-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Naam van de nieuwe vaardigheid"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </Form.Group>
      <Form.Select
        className="mb-3"
        onChange={(e) => setNiveau(e.target.value)}
        name="niveau"
      >
        <option>Kies het niveau van beheersing</option>
        <option value="Volledige Beheersing">Volledige Beheersing</option>
        <option value="Goede Beheersing">Goede Beheersing</option>
        <option value="Mattige Beheersing">Mattige Beheersing</option>
      </Form.Select>
      <Button
        className="mb-3"
        type="submit"
        variant="dark"
        onClick={handleSubmit}
      >
        Vaardigheid Toevoegen
      </Button>
    </Form>
  );
};
