import React from 'react'
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import {ProjectCarousel} from "../components/ProjectCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className='mx-3 mb-3'>
      <Container fluid> 
        <Row className='border border-top-0 border-dark'>
          <Col className='my-auto'> 
            <Row className='text-center' >
              <h1 style={{fontSize: 30}}>Welkom op mijn portfolio!</h1>
            </Row>
            <Row className='text-center my-2 mx-5'>
              <p>
                Ik ben een student ingenieurswetenschappen architectuur aan de Ugent. 
                Momenteel zit ik in het eerste jaar van mijn masteropleiding.
                Op deze site vindt u alle projecten die ik als student gemaakt heb. 
                Kijk gerust eens rond of contacteer mij indien u vragen heeft.
              </p>
            </Row>
            <Row className="justify-content-md-center my-4">
              <Col className='text-center'>
                <Button href='/projecten' variant="dark">Projecten</Button>{' '}
                <Button href='/contact' variant="dark">Contacteer Mij</Button>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <Image className='my-3' src="./Portret Foto.jpg" fluid rounded/>
          </Col>
        </Row>
        <Row className='border border-top-0 border-dark'>
          <ProjectCarousel/>
        </Row>
      </Container>
    </div>
  );   
}


export default Home
