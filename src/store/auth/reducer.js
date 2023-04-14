import { AUTH_REQUEST_SUCCESS } from "./actions";

const initialStore = {
    user: null,
};

export const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case AUTH_REQUEST_SUCCESS:
            return {
                ...store,
                user: action.payload,
            };

        default:
            return store;
    }
};
