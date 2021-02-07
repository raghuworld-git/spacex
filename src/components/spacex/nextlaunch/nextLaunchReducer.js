import { NEXTLAUNCH } from "../type";

const nextLaunchReducer = (state = [], action) => {
  switch (action.type) {
    case NEXTLAUNCH:
      return action.payload;
    default:
      return state;
  }
};

export default nextLaunchReducer;
