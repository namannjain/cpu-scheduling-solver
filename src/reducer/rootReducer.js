import { combineReducers } from "redux";
import { inputsReducer } from "./inputsReducer";

export const rootReducer = combineReducers({
    inputs: inputsReducer,
})
