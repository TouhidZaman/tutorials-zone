import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    courseReducer,
    filterReducer,
})

export default rootReducer;