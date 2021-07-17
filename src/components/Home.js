import React from "react";
import { Card, Container } from "react-bootstrap";
import Header from "./Header";
import "../styles/home.scss";
import Full from "../assets/full.svg";
import Front from "../assets/front-end.svg";

function Home() {
  const option1 = "I'm a Front-End";
  const option2 = "I'm a Full Stack";

  return (
       <div className="custom-container">
      <Header />
      <Container fluid>

      <Card className="custom-text-wrapper">
        <Card.Body>
          <Card.Title> Hi there!</Card.Title>
          <Card.Text> This is your design challenge</Card.Text>
          <div className="custom-img-wrapper">
            <div className="img-1">
              <Card.Img src={Front} />
              <span> {option1}</span>
            </div>
            <div className="img-2">
              <Card.Img src={Full} />
              <span> {option2}</span>
            </div>
          </div>
          <span>2 days ago</span>
        </Card.Body>
      </Card>
      </Container>


    
    </div>

   
  );
}

export default Home;
