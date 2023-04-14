import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer";
import { customMiddleware } from "./middlewares/customMiddleware";
import thunkMiddleware from "redux-thunk";

export const initStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(customMiddleware, thunkMiddleware))
    );
    return store;
};
