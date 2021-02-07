import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";

import { getSpacexLatestLaunches } from "./latestActions";
import CarouselCustom from "../../common/CarouselCustom";
import CustomSpinner from "../../common/CustomSpinner";

const LatestDetails = ({ getSpacexLatestLaunches, latestLaunch }) => {
  useEffect(() => {
    getSpacexLatestLaunches();
  }, []);

  const loadHTML = () => {
    if (latestLaunch.length <= 0) {
      return <CustomSpinner />;
    } else {
      const { original } = latestLaunch.links.flickr;
      return <CarouselCustom images={original} />;
    }
  };

  return (
    <Row>
      <Col>
        <h4>Latest Launch Details</h4>
        {loadHTML()}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    latestLaunch: state.latestLaunches,
  };
};
export default connect(mapStateToProps, { getSpacexLatestLaunches })(
  LatestDetails
);
