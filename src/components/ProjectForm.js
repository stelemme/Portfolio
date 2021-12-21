import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [vak, setVak] = useState("");
  const [jaar, setJaar] = useState("");
  const [info, setInfo] = useState("");
  const [vaardigheden, setVaardigheden] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData(e) {
      const requestOptions = {
        methode: "GET",
      };
      const data = await fetch(
        "http://localhost:5000/stef/data/projects.json",
        requestOptions
      );
      const body = await data.json();
      setProjects(body);
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const id = projects.length + 1;

      var requestOptionsPicture = {
        method: "PUT",
        headers: { "Content-Type": "image/jpeg" },
        body: selectedFile,
      };

      await fetch(
        `http://localhost:5000/stef/data/Ontwerp${id}.jpg`,
        requestOptionsPicture
      );

      const foto = `http://localhost:5000/stef/data/Ontwerp${id}.jpg`
      const project = { title, vak, jaar, info, foto, vaardigheden, id };
      projects.push(project);

      var requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projects),
        redirect: "follow",
      };
      console.log("data send")

      await fetch("http://localhost:5000/stef/data/projects.json", requestOptions)
        } catch (error) {
      console.log(error)
    }
  };

  return (
    <Form required>
      <Form.Group controlId="foto" className="my-3" aria-required>
        <Form.Label>Foto (Formaat 3000 x 1500)</Form.Label>
        <Form.Control
          accept='.jpg,.jpeg'
          type="file"
          onChange={(e) => {
            setSelectedFile(e.target.files[0])
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
          maxLength={40}
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Vak</Form.Label>
        <Form.Control
          type="text"
          placeholder="Vak waarvoor het Project gemaakt werd"
          onChange={(e) => setVak(e.target.value)}
          value={vak}
          maxLength={40}
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

export { ProjectForm };
