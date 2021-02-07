import spacexAPI from "../../../apis/spacexAPI";
import { LATEST } from "../type";

export const getSpacexLatestLaunches = () => {
  return async (dispatch) => {
    const res = await spacexAPI.get("/launches/latest");
    dispatch({
      type: LATEST,
      payload: res.data,
    });
  };
};
