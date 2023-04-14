export const todoistKey = null; // "Bearer xxxx";
const todoistProjectId = "1111111111";

export const api = {
    baseUrl: "https://api.todoist.com/rest/v2",
    headers: {
        Authorization: todoistKey,
        "Content-Type": "application/json",
    },
};

export const projectId = todoistProjectId;
