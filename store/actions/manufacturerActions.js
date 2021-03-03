import instance from "./instance";
// ACTION TYPES
import { FETCH_MANUFACTURERS } from "./types";
// ACTIONS

//------------------------------FETCHING FROM BACKEND
export const fetchManufacturers = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/manufacturers");
      dispatch({
        type: FETCH_MANUFACTURERS,
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
