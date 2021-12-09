import React from 'react'
import { Container, Row, Button, Col } from "react-bootstrap";
import {ProjectCard} from "../components/ProjectCard";


function Projecten() {
  return (
    <div className='mx-3 mb-3'> 
      <Container fluid>
        <Row className="border border-top-0 border-dark">
          <ProjectCard/>
        </Row>
        <Row className="border border-top-0 border-dark">
          <Col>
            <Button className='my-2' href='/AddProject' variant="dark">+ Nieuw Project</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );   
}


export default Projecten;