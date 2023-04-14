import { api, projectId, todoistKey } from "../../todosConfig";

const getResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`ошибка ${res.status}`);
};

export const sendGetTasksRequest = () => {
    // In case you forgot to add key
    if (!todoistKey) {
        return Promise.resolve([]);
    }

    return fetch(`${api.baseUrl}/tasks?project_id=${projectId}`, {
        headers: api.headers,
    }).then(getResponse);
};

export const sendAddTaskRequest = (taskText) => {
    // In case you forgot to add key
    if (!todoistKey) {
        return Promise.resolve({
            id: crypto.randomUUID(),
            content: taskText,
        });
    }

    return fetch(`${api.baseUrl}/tasks`, {
        method: "POST",
        headers: api.headers,
        body: JSON.stringify({
            content: taskText,
            project_id: projectId,
        }),
    }).then(getResponse);
};

export const sendDeleteTaskByIdRequest = (taskId) => {
    // In case you forgot to add key
    if (!todoistKey) {
        return Promise.resolve(true);
    }

    return fetch(`${api.baseUrl}/tasks/${taskId}`, {
        method: "DELETE",
        headers: api.headers,
    }).then((res) => {
        if (!res.ok) return Promise.reject(`ошибка ${res.status}`);
    });
};
