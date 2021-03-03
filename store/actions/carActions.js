import instance from "./instance";
// ACTION TYPES
import { FETCH_CARS } from "./types";
// ACTIONS

//------------------------------FETCHING FROM BACKEND
export const fetchCars = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/cars");
      dispatch({
        type: FETCH_CARS,
        payload: response.data,
      });
    } catch (err) {
      console.error();
    }
  };
};
