import Task from "./Task";
import NewTaskForm from "./NewTaskForm";
import { useSelector } from "react-redux";
import { getTasks } from "../store/tasks/selectors";

const TasksList = () => {
    const tasks = useSelector(getTasks);

    return (
        <div className="todolist__list">
            <NewTaskForm />
            <div className="todolist__tasks">
                {tasks.map((task) => (
                    <Task task={task} key={task.id} />
                ))}
            </div>
        </div>
    );
};

export default TasksList;
