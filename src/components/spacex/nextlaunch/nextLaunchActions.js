import spacexAPI from "../../../apis/spacexAPI";
import { NEXTLAUNCH } from "../type";

export const getSpacexNextLaunch = () => {
  return async (dispatch) => {
    const res = await spacexAPI.get("/launches/next");
    dispatch({
      type: NEXTLAUNCH,
      payload : res.data
    });
  };
};
