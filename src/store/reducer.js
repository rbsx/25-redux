import { combineReducers } from "redux";
import { reducer as tasksReducer } from "./tasks/reducer";
import { reducer as authReducer } from "./auth/reducer";

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    auth: authReducer,
});
