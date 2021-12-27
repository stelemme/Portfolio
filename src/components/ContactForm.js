import { Form, Col, Button, Container } from "react-bootstrap";
import React from "react";

// Deze component zorgt ervoor dat het contact component op mijn contact page werkt.
// De berichten worden verstuurd naar mijn email en er volgt automatisch een antwoord.

const initialFormData = Object.freeze({
  naam: "",
  email: "",
  bericht: "",
});

export const FormPage = (props) => {
  const [formData, updateFormData] = React.useState(initialFormData);

  // Deze functie zorgt ervoor dat de berichten als email verstuurd worden naar mijn email adres.
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email succesvol verstuurd!");
      })
      .catch((err) => console.error("Er is iets fout gelopen.", err));
  };

  // Deze functie wordt uitgevoerd wanneer er iets wordt ingevuld in het formulier.
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  // Deze async functie wordt uitgevoerd wanneer het contact formulier wordt ingediend.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bedankt voor uw bericht. Uw boodschap is verstuurd.`);
    const templateId = "template_thzt1ur";
    const serviceID = "service_3dyj39e";
    sendFeedback(serviceID, templateId, {
      from_name: formData.naam,
      message: formData.bericht,
      email: formData.email,
    });

    console.log(formData);
  };

    // Dit is de code voor het formulier waar het bericht, email en naam wordt ingevoerd. 
  return (
    <Container fluid>
      <Form>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Naam</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="naam"
            type="name"
            placeholder="Typ hier uw naam"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="naam@voorbeeld.com"
          />
        </Form.Group>
        <Form.Group as={Col} id="formGridQuery">
          <Form.Label>Bericht</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="bericht"
            as="textarea"
            rows={7}
          />
        </Form.Group>
        <Button
          className="mt-3"
          onClick={handleSubmit}
          variant="dark"
          type="submit"
        >
          Verstuur
        </Button>
      </Form>
    </Container>
  );
};
