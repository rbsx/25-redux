import { useDispatch } from "react-redux";
import { deleteTask } from "../store/tasks/actions";

const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleClickDelete = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <article className="todolist-item">
            <span className="todolist-item__text">{task.content}</span>
            <button
                onClick={handleClickDelete}
                className="todolist-item__del"
            ></button>
        </article>
    );
};

export default Task;
