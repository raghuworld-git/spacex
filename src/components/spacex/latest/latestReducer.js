import { LATEST } from "../type";

const latestReducer = (state = [], action) => {
  switch (action.type) {
    case LATEST:
      return action.payload;
    default:
      return state;
  }
};

export default latestReducer;
