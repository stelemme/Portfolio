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
      const data = await fetch('http://localhost:5000/stef/data/projects.json', requestOptions)
      const body = await data.json()
      setProjects(body)
      }
      fetchData()
  }, [])

  console.log(projects)

  return (
    <Row className='mb-4 mx-auto'>
      {projects.map((project) => (
        <Col xl="4" lg="5" md="6" key={project.id}>
          <Card  className='mt-4' >  
            <Card.Img variant="top" src={project.foto}/>
            <Card.Body style={{height:"320px"}}>
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
