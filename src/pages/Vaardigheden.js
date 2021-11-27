import React from 'react'
import { Container, Row, ListGroup} from "react-bootstrap";

function Vaardigheden() {
    return (
        <div className='mx-3 mb-3'> 
            <Container fluid>
                <Row className="border border-top-0 border-dark">
                    <ListGroup variant="flush" className='my-3'>
                        <ListGroup.Item>Autocad</ListGroup.Item>
                        <ListGroup.Item>Rhino</ListGroup.Item>
                        <ListGroup.Item>Grasshopper</ListGroup.Item>
                        <ListGroup.Item>Photoshop</ListGroup.Item>
                        <ListGroup.Item>Revit</ListGroup.Item>
                        <ListGroup.Item>Python</ListGroup.Item>
                        <ListGroup.Item>Javascript</ListGroup.Item>
                    </ListGroup>
                </Row>
            </Container>
        </div>
    );   
}


export default Vaardigheden;