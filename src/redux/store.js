import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import userReducer from "./reducers";

const rootReducer = combineReducers({userReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk))

// YOUTUBE-UL > https://www.youtube.com/watch?v=DYJVl6vVCEI&t=4s
// (add to)     https://mocki.io/fake-json-api > json.file

