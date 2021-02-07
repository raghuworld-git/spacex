import React from "react";
import { Spinner } from "react-bootstrap";

const CustomSpinner = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
};

export default CustomSpinner;
