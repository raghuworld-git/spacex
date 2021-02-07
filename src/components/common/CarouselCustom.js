import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselCustom = ({ images = [] }) => {
  const cItems = () => {
    return images.map((image, index) => {
      return (
        <Carousel.Item key={index}>
          <img  style={{ height: "90vh" }}
            className="d-block w-100"
            src={image}
            alt={`${index + 1} Slide`}
          />
        </Carousel.Item>
      );
    });
  };
  return (
    <>
      <Carousel>{cItems()}</Carousel>
    </>
  );
};

export default CarouselCustom;
