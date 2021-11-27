import React from 'react'
import { Container, Form, Row, Button } from "react-bootstrap";

function AddProject() {
    return (
        <div className='mx-3 mb-3'>
            <Container fluid>
                <Row className="border border-top-0 border-dark">
                    <Form>
                        <Form.Group controlId="foto" className="my-3">
                            <Form.Label>Foto (Formaat 3000 x 1500)</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group className="my-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="title" placeholder="Naam van het Project" />
                        </Form.Group>
                        <Form.Group className="my-3" controlId="vak">
                            <Form.Label>Vak</Form.Label>
                            <Form.Control type="vak" placeholder="Vak waarvoor het Project gemaakt werd" />
                        </Form.Group>
                        <p>Academiejaar</p>
                        <Form.Select aria-label="Academiejaar" className="mb-3"> 
                            <option>Kies het academiejaar</option>
                            <option value="1">1e Bachelor Ingenieurswetenschappen Architectuur</option>
                            <option value="2">2e Bachelor Ingenieurswetenschappen Architectuur</option>
                            <option value="3">3e Bachelor Ingenieurswetenschappen Architectuur</option>
                            <option value="3">1e Master Ingenieurswetenschappen Architectuur</option>
                            <option value="3">2e Master Ingenieurswetenschappen Architectuur</option>
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="Beschrijving">
                            <Form.Label>Beschrijving</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <Button className='mb-3' type="submit" variant="dark">Project Toevoegen</Button>
                    </Form>
                </Row>
            </Container>
        </div>
    );   
}

export default AddProject