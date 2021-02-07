import { combineReducers } from "redux";
import nextLaunchReducer from "./components/spacex/nextlaunch/nextLaunchReducer";
import latestReducer from "./components/spacex/latest/latestReducer";

export default combineReducers({
  nextLaunch: nextLaunchReducer,
  latestLaunches : latestReducer
});
