import React from 'react'
import { Container, Row, Card, CardGroup, Button, Col } from "react-bootstrap";


function Projecten() {
    return (
        <div className='mx-3 mb-3'> 
            <Container fluid>
                <Row className="border border-top-0 border-dark">
                    <CardGroup className="my-3">
                        <Card>
                            <Card.Img variant="top" src="./ontwerp 1.jpg" />
                            <Card.Body>
                                <Card.Title>BioBoorgooien</Card.Title>
                                <Card.Text>
                                    Vak: Architectuurontwerp 2
                                </Card.Text>
                                <Card.Text>
                                    2e Bachelor Ingenieurswetenschappen Architectuur
                                </Card.Text>
                                <Card.Text>
                                    Dit ontwerp is een antwoord op de vraag "Hoe kunnen we landbouw in de stad brengen?". 
                                    Er werd een bioboerderij/hostel ontworpen in een voormalig overstromingsgebied aan de rand van de stad Gent.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small>
                                    <Card.Link href='/vaardigheden' style={{color:"black"}}>Autocad</Card.Link>
                                    <Card.Link href='/vaardigheden' style={{color:"black"}}>Photoshop</Card.Link>
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./ontwerp 2.jpg" />
                            <Card.Body>
                                <Card.Title>Pluswonen</Card.Title>
                                <Card.Text>
                                    Vak: Architectuurontwerp 3
                                </Card.Text>
                                <Card.Text>
                                    3e Bachelor Ingenieurswetenschappen Architectuur
                                </Card.Text>
                                <Card.Text>
                                    Een project waarbij er een kavel in Gent omgevormd werd tot een woning waarin verschillende speciale gezinssituaties mogelijk zijn. 
                                    Deze werden mogelijk gemaakt door de toevoeging van een zogenaamde 'plusruimte'.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small>
                                    <Card.Link href='/vaardigheden' style={{color:"black"}}>Autocad</Card.Link>
                                    <Card.Link href='/vaardigheden' style={{color:"black"}}>Photoshop</Card.Link>
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="./ontwerp 3.jpg" />
                            <Card.Body>
                                <Card.Title>Charles Vandenhove Paviljoen</Card.Title>
                                <Card.Text>
                                    Vak: Building Informatics
                                </Card.Text>
                                <Card.Text>
                                    3e Bachelor Ingenieurswetenschappen Architectuur
                                </Card.Text>
                                <Card.Text>
                                    Bij deze opgave in het kader van de hedendaagse digitale architectuurwereld werd een bestaand gebouw getransformeerd in een bim-model.
                                    Het gebouw dat gemodelleerd werd is het Charles Vandenhove Paviljoen in Gent.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small>
                                    <Card.Link href='/vaardigheden' style={{color:"black"}}>Autocad</Card.Link>
                                    <Card.Link href='/vaardigheden' style={{color:"black"}}>Rhino 7</Card.Link>
                                    <Card.Link href='/vaardigheden' style={{color:"black"}}>Revit</Card.Link>
                                </small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
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