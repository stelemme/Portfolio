import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useGetProjects } from "../hooks/useGetProjects"

// Deze component zorgt ervoor dat het nieuwe project kan worden toegevoegd.

export const ProjectForm = () => {
  // De constanten worden geïnitieerd.
  const [title, setTitle] = useState("");
  const [vak, setVak] = useState("");
  const [jaar, setJaar] = useState("");
  const [info, setInfo] = useState("");
  const [vaardigheden, setVaardigheden] = useState("");
  const [selectedFile1, setSelectedFile1] = useState("");
  const [selectedFile2, setSelectedFile2] = useState("");
  const [selectedFile3, setSelectedFile3] = useState("");

  // De bestaande projecten worden eerst ingelezen via een GET request van de solid server.
  const { projects } = useGetProjects()

  // Deze async functie wordt uitgevoerd wanneer het project formulier wordt ingediend.
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      alert(`Het project is nu toegevoegd. Bedankt.`);

      // Elk project krijgt een unieke ID.
      const id = projects.length + 1;
      
      // Er worden drie variabelen geïniteerd die vervolgens via een 
      // PUT request de drie foto's die bij dit project horen zullen uploaden naar de solid server.
      var requestOptionsPicture1 = {
        method: "PUT",
        headers: { "Content-Type": "image/jpeg" },
        body: selectedFile1,
      };
      var requestOptionsPicture2 = {
        method: "PUT",
        headers: { "Content-Type": "image/jpeg" },
        body: selectedFile2,
      };
      var requestOptionsPicture3 = {
        method: "PUT",
        headers: { "Content-Type": "image/jpeg" },
        body: selectedFile3,
      };

      await fetch(
        `http://localhost:5000/stef/data/Ontwerp${id}_1.jpg`,
        requestOptionsPicture1
      );
      await fetch(
        `http://localhost:5000/stef/data/Ontwerp${id}_2.jpg`,
        requestOptionsPicture2
      );
      await fetch(
        `http://localhost:5000/stef/data/Ontwerp${id}_3.jpg`,
        requestOptionsPicture3
      );

      const foto1 = `http://localhost:5000/stef/data/Ontwerp${id}_1.jpg`;
      const foto2 = `http://localhost:5000/stef/data/Ontwerp${id}_2.jpg`;
      const foto3 = `http://localhost:5000/stef/data/Ontwerp${id}_3.jpg`;

      // Het nieuwe project wordt in een constante gestoken en bij de al bestaande projecten gevoegd.
      const project = {
        title,
        vak,
        jaar,
        info,
        foto1,
        foto2,
        foto3,
        vaardigheden,
        id,
      };
      projects.push(project);
      
      // Alle projecten (bestaande + nieuwe) worden via een PUT request naar de solid server gestuurd.
      var requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projects),
        redirect: "follow",
      };
      console.log("data send");

      await fetch(
        "http://localhost:5000/stef/data/projects.json",
        requestOptions
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Dit is de code voor het formulier waar het nieuwe project wordt ingevoerd.
  return (
    <Form>
      <Form.Group controlId="foto" className="my-3" aria-required>
        <Form.Label>Foto 1 (Formaat 3000 x 1500)</Form.Label>
        <Form.Control
          accept=".jpg,.jpeg"
          type="file"
          onChange={(e) => {
            setSelectedFile1(e.target.files[0]);
          }}
        />
      </Form.Group>
      <Form.Group controlId="foto" className="my-3" aria-required>
        <Form.Label>Foto 2 (Formaat 3000 x 1500)</Form.Label>
        <Form.Control
          accept=".jpg,.jpeg"
          type="file"
          onChange={(e) => {
            setSelectedFile2(e.target.files[0]);
          }}
        />
      </Form.Group>
      <Form.Group controlId="foto" className="my-3" aria-required>
        <Form.Label>Foto 3 (Formaat 3000 x 1500)</Form.Label>
        <Form.Control
          accept=".jpg,.jpeg"
          type="file"
          onChange={(e) => {
            setSelectedFile3(e.target.files[0]);
          }}
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Naam van het Project"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Vak</Form.Label>
        <Form.Control
          type="text"
          placeholder="Vak waarvoor het Project gemaakt werd"
          onChange={(e) => setVak(e.target.value)}
          value={vak}
        />
      </Form.Group>
      <p>Academiejaar</p>
      <Form.Select
        className="mb-3"
        onChange={(e) => setJaar(e.target.value)}
        name="jaar"
      >
        <option>Kies het academiejaar</option>
        <option value="1e Bachelor Ingenieurswetenschappen Architectuur">
          1e Bachelor Ingenieurswetenschappen Architectuur
        </option>
        <option value="2e Bachelor Ingenieurswetenschappen Architectuur">
          2e Bachelor Ingenieurswetenschappen Architectuur
        </option>
        <option value="3e Bachelor Ingenieurswetenschappen Architectuur">
          3e Bachelor Ingenieurswetenschappen Architectuur
        </option>
        <option value="1e Master Ingenieurswetenschappen Architectuur">
          1e Master Ingenieurswetenschappen Architectuur
        </option>
        <option value="2e Master Ingenieurswetenschappen Architectuur">
          2e Master Ingenieurswetenschappen Architectuur
        </option>
      </Form.Select>
      <Form.Group className="my-3">
        <Form.Label>Vaardigheden</Form.Label>
        <Form.Control
          type="text"
          placeholder="Vaardigheden die gebruikt werden tijdens het project"
          onChange={(e) => setVaardigheden(e.target.value)}
          value={vaardigheden}
          maxLength={40}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Beschrijving">
        <Form.Label>Beschrijving</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          onChange={(e) => setInfo(e.target.value)}
          value={info}
          maxLength={240}
        />
      </Form.Group>
      <Button
        className="mb-3"
        type="submit"
        variant="dark"
        onClick={handleSubmit}
      >
        Project Toevoegen
      </Button>
    </Form>
  );
};

