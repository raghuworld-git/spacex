import React from "react";
import { Col, Row } from "react-bootstrap";
import LatestContainer from "./spacex/latest/LatestContainer";
import NextLaunchContainer from "./spacex/nextlaunch/NextLaunchContainer";

const AppContainer = () => {
  return (
    <>
      <Row>
        <Col md={4} xs={4} sm={4} lg={4}>
          <LatestContainer />
        </Col>
        <Col md={4} xs={4} sm={4} lg={4}>
          <NextLaunchContainer />
        </Col>
        {/* <Col md={4} xs={4} sm={4} lg={4}  className='h-25'>
          <LatestContainer />
        </Col> */}
      </Row>
    </>
  );
};

export default AppContainer;
