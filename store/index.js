import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchCars } from "./actions/carActions";
import { fetchManufacturers } from "./actions/manufacturerActions";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

// TO FETCH ONE TIME ONLY (WHEN APPLICATION STARTS)
store.dispatch(fetchCars());
store.dispatch(fetchManufacturers());

export default store;
