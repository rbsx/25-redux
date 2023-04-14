import {
    sendAddTaskRequest,
    sendDeleteTaskByIdRequest,
    sendGetTasksRequest,
} from "./api";

export const ADD_TASK = "ADD_TASK";
export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const ADD_TASK_ERROR = "ADD_TASK_ERROR";
export const DELETE_TASK = "DELETE_TASK";
export const LOAD_TASKS_SUCCESS = "LOAD_TASKS_SUCCESS";

export const loadTask = () => (dispatch) => {
    sendGetTasksRequest().then((response) => {
        dispatch({
            type: LOAD_TASKS_SUCCESS,
            payload: response,
        });
    });
};

export const deleteTask = (id) => (dispatch) => {
    sendDeleteTaskByIdRequest(id).then(() => {
        dispatch({
            type: DELETE_TASK,
            payload: {
                id,
            },
        });
    });
};

export const addTask = (content) => (dispatch) => {
    dispatch({
        type: ADD_TASK_REQUEST,
    });

    sendAddTaskRequest(content)
        .then((response) => {
            dispatch({
                type: ADD_TASK,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: ADD_TASK_ERROR,
                payload: error,
            });
        });
};
