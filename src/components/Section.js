import React from "react";
import { Container } from "react-bootstrap";
import "../styles/section.scss";

function Section() {
  const data = [
    {
      id: "1",
      name: "Sports",
      images: "../1.svg",
    },
    {
      id: "2",
      name: "Arts & Craft",
      images: "../2.svg",
    },
    {
      id: "3",
      name: "Board Games",
      images: "../3.svg",
    },
    {
      id: "4",
      name: "Music",
      images: "../4.svg",
    },
    {
      id: "5",
      name: "Nature & Outdoors",
      images: "../5.svg",
    },
    {
      id: "6",
      name: "Fashion",
      images: "../6.svg",
    },
    {
      id: "7",
      name: "Tech & Robotics",
      images: "../7.svg",
    },
    {
      id: "8",
      name: "Perfoming Arts",
      images: "../8.svg",
    },
    {
      id: "9",
      name: "Collecting",
      images: "../9.svg",
    },
    {
      id: "10",
      name: "Culinary",
      images: "../10.svg",
    },
  ];

  return (
      <Container fluid>
              <div className="custom-section-container">
      <div className="custom-section">
        <h4>We would Like to see your Responsive skill</h4>
        <span> Add mouse hover interactions to amplify your design</span>
      </div>
      <div className="data">{data.map((items) => {
          console.log(items)
          return (
              <>
              <div className="custom-data" >
              <img src={items.images}  />

<p key={'1'}> {items.name} </p>

              </div>
                      
              </>
          )
      })} 
      
      </div>
    </div>

      </Container>

  );
}

export default Section;
