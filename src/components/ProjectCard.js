import React from 'react';
import { useState, useEffect } from "react";
import { Card,  Col, Row } from "react-bootstrap";


const ProjectCard = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchData(e) {
      const requestOptions = {
        methode: "GET"
      }
      const data = await fetch('http://localhost:5000/stef/data/db.json', requestOptions)
      const body = await data.json()
      setProjects(body.projects)
      }
      fetchData()
  }, [])

  return (
    <Row className='mb-4 mx-auto'>
      {projects.map((project) => (
        <Col md="4">
          <Card  className='mt-4' key={project.id}>  
            <Card.Img variant="top" src={project.foto}/>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                Vak: {project.vak}
              </Card.Text>
              <Card.Text>
                {project.jaar}
              </Card.Text>
              <Card.Text>
                {project.info}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>
                <Card.Link href='/vaardigheden' style={{color:"black"}}>Vaardigheden:</Card.Link>{' '}
              <small className="text-muted">{project.vaardigheden}</small>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export {ProjectCard}
