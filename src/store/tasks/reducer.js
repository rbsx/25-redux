import {
    ADD_TASK,
    ADD_TASK_ERROR,
    ADD_TASK_REQUEST,
    DELETE_TASK,
    LOAD_TASKS_SUCCESS,
} from "./actions";

const initialStore = {
    tasks: [],
    error: null,
    pendingRequest: false,
};

export const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...store,
                tasks: [...store.tasks, action.payload],
                pendingRequest: false,
            };

        case DELETE_TASK:
            return {
                ...store,
                tasks: store.tasks.filter(
                    (task) => task.id !== action.payload.id
                ),
                pendingRequest: false,
            };

        case ADD_TASK_ERROR:
            return {
                ...store,
                error: action.payload,
                pendingRequest: false,
            };

        case ADD_TASK_REQUEST:
            return {
                ...store,
                error: null,
                pendingRequest: true,
            };

        case LOAD_TASKS_SUCCESS:
            return {
                ...store,
                tasks: action.payload,
            };

        default:
            return store;
    }
};
