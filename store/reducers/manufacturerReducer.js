import { FETCH_MANUFACTURERS } from "../actions/types";

const initialState = { manufacturers: [], loading: true };

const manufacturerReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------FETCHING FROM BACKEND
    case FETCH_MANUFACTURERS:
      return {
        ...state,
        manufacturers: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default manufacturerReducer;
