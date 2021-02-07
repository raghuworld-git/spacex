import React from "react";
import { Switch, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';

import AppContainer from "./components/AppContainer";
import LatestDetails from './components/spacex/latest/LatestDetails';
const App = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/latestLaunch" component={LatestDetails} />
    </Switch>
    </Container>
  );
};

export default App;
