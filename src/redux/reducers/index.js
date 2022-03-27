import { combineReducers } from "redux";
import { inputFieldsReducer } from "./studentReducer";



const reducers = combineReducers({
    studentInput : inputFieldsReducer
});

export default reducers;