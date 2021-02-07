import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Badge, Button } from "react-bootstrap";
import SimpleSpacxCard from "../../common/SimpleSpacxCard";
import CustomSpinner from "../../common/CustomSpinner";
import { getSpacexNextLaunch } from "./nextLaunchActions";

const NextLaunchContainer = ({ getSpacexNextLaunch, nextLaunch }) => {
  useEffect(() => {
    getSpacexNextLaunch();
  }, []);

  const heading = <h5>Next launch</h5>;

  const upcomingLaunchHTML = () => {
    if (nextLaunch.length<=0) {
      return <CustomSpinner />;
    } else {
      const { date_utc, name, links, tbd } = nextLaunch;
      const imageURL =
        links.flickr.original > 0
          ? links.flickr.original[0]
          : links.patch.large;
      const linkMore = (
        <Button as={Link} to="/upcomingLaunches" className="float-right" size="sm">
          Upcoming launches
        </Button>
      );
      const tbdStatus = tbd ? (
        <Badge variant='warning'>
          TBD
        </Badge>
      ) : null;
      return (
        <SimpleSpacxCard
          date_utc={date_utc}
          name={name}
          image={imageURL}
          linkMore={linkMore}
          status = {tbdStatus}
        />
      );
    }
  };
  return (
    <>
      {heading} {upcomingLaunchHTML()}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    nextLaunch: state.nextLaunch
  };
};

export default connect(mapStateToProps, { getSpacexNextLaunch })(
  NextLaunchContainer
);
