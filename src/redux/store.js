import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import filtersReducer from "./reducers/filters";
import comixReducer from "./reducers/comix";
import cartReducer from "./reducers/cart";

let rootReducer = combineReducers({
  filters: filtersReducer,
  comix: comixReducer,
  cart: cartReducer,
});

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
