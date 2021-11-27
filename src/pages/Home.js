import React from 'react'
import { Container, Col, Row, Image, Button, Carousel } from "react-bootstrap";
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
                <Carousel className="my-3">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./ontwerp 1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>BioBourgooien</h3>
                        <p>Achitectuurontwerp 2</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./ontwerp 2.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Pluswonen</h3>
                        <p>Architectuurontwerp 3</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./ontwerp 3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Charles Vandenhove Paviljoen</h3>
                        <p>Building Informatics</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </div>
    );   
}


export default Home
