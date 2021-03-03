import { FETCH_CARS } from "../actions/types";

const initialState = { cars: [], loading: true };

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------FETCHING FROM BACKEND
    case FETCH_CARS:
      return {
        ...state,
        cars: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default carReducer;
