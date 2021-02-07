import React from "react";
import { Card } from "react-bootstrap";
import "./simpleSpacxCard.css";

const SpaceXCard = ({ date_utc, name, image, status, linkMore }) => {
  return (
    <>
      {/* // src="holder.js/100px180"  */}
      <Card bg="dark" text="white">
        <Card.Img sizes="" variant="top" src={image} />
        <Card.Body className="text-center">
          <Card.Title>
            {name} {status}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{date_utc}</Card.Subtitle>
          {linkMore}
        </Card.Body>
      </Card>
    </>
  );
};

export default SpaceXCard;
