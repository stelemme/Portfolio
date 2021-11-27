import {FormPage} from "../components/Form";
import {Maps} from "../components/GoogleMaps";
import { Container, Col, Row } from "react-bootstrap";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
    return (
        <div className='mx-3'> 
            <Container fluid>
              <Row className='border border-top-0 border-dark'>
                <Col className='my-3'><FormPage /></Col>
                <Col className='my-3'><Maps /></Col>
              </Row>
            </Container>
        </div>
    );   
}


export default Contact;