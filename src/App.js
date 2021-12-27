import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home, Contact, Vaardigheden, Projecten, AddProject } from "./pages";
import Navbar from "./components/Navbar";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container style={{ width: 1200 }}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Vaardigheden" element={<Vaardigheden />} />
          <Route path="/Projecten" element={<Projecten />} />
          <Route path="/AddProject" element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
