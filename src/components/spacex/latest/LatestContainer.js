import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SpaceXCard from "../../common/SimpleSpacxCard";
import CustomSpinner from "../../common/CustomSpinner";
import { getSpacexLatestLaunches } from "./latestActions";

const LatestContainer = ({ getSpacexLatestLaunches, latestLaunches }) => {
  useEffect(() => {
    getSpacexLatestLaunches();
  }, []);

  const heading = <h5>Latest launch</h5>;

  const loadLatestLaunch = () => {

    if (latestLaunches.length <= 0) {
      return <CustomSpinner/>
    } else {
      const { date_utc, name, success, links } = latestLaunches;
      const badge = (
        <Badge variant={success ? "success" : "danger"}>
          {success ? "Success" : "Failure"}
        </Badge>
      );

      const linkMore = (
        <Button as={Link} to="/latestLaunch" className="float-right" size="sm">
          For more
        </Button>
      );
      return  (
        <SpaceXCard
          date_utc={date_utc}
          name={name}
          image={links.flickr.original[0]}
          status={badge}
          linkMore={linkMore}
        />
      );     
    }
  };

  return <>{heading}{loadLatestLaunch()}</>;
};

const mapStateToProps = (state) => {
  return {
    latestLaunches: state.latestLaunches,
  };
};

export default connect(mapStateToProps, { getSpacexLatestLaunches })(
  LatestContainer
);
