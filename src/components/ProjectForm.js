import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from "react";

const ProjectForm = () => {
  const [title, setTitle] = useState('');
  const [vak, setVak] = useState('');
  const [academiejaar, setAcademiejaar] = useState('');
  const [beschrijving, setBeschrijving] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const project = { title, vak, academiejaar, beschrijving}
    console.log(project);

    fetch('http://localhost:5000/stef/data/', {
      method: 'POST',
      headers: { "Slug": "Database.json" },
      body: JSON.stringify(project)
    }).then(() => {
      console.log('Data send') 
    })
  }

  return (
    <Form>
      <Form.Group controlId="foto" className="my-3">
        <Form.Label>Foto (Formaat 3000 x 1500)</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Naam van het Project" 
          onChange= {(e)  => setTitle(e.target.value)}
          required 
          value={title}
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label>Vak</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Vak waarvoor het Project gemaakt werd" 
          onChange= {(e)  => setVak(e.target.value)}
          required
          value={vak}
        />
      </Form.Group>
      <p>Academiejaar</p>
      <Form.Select className="mb-3" onChange= {(e)  => setAcademiejaar(e.target.value)} name="academiejaar" required> 
        <option>Kies het academiejaar</option>
        <option value="1e Bachelor Ingenieurswetenschappen Architectuur">1e Bachelor Ingenieurswetenschappen Architectuur</option>
        <option value="2e Bachelor Ingenieurswetenschappen Architectuur">2e Bachelor Ingenieurswetenschappen Architectuur</option>
        <option value="3e Bachelor Ingenieurswetenschappen Architectuur">3e Bachelor Ingenieurswetenschappen Architectuur</option>
        <option value="1e Master Ingenieurswetenschappen Architectuur">1e Master Ingenieurswetenschappen Architectuur</option>
        <option value="2e Master Ingenieurswetenschappen Architectuur">2e Master Ingenieurswetenschappen Architectuur</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="Beschrijving">
        <Form.Label>Beschrijving</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={5}
          onChange= {(e)  => setBeschrijving(e.target.value)}
          required
          value={beschrijving}
        />
      </Form.Group>
        <Button className='mb-3' type="submit" variant="dark" onClick={handleSubmit}>Project Toevoegen</Button>
    </Form>
  );
}

export {ProjectForm}