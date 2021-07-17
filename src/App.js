import React from "react";
import Home from "./components/Home";
import './styles/home.scss'
import {Container} from 'react-bootstrap'
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid className="App" >
      <Home />
      <Section />
      <Footer />
  
    </Container>
  );
}

export default App;
