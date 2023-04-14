import { useState } from "react";
import { addTask } from "../store/tasks/actions";
import { useDispatch, useSelector } from "react-redux";

const NewTaskForm = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.tasks.pendingRequest);
    const error = useSelector((state) => state.tasks.error);

    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch(addTask(inputValue));

        setInputValue("");
    };

    return (
        <>
            {error ? <div className="error">{error}</div> : null}
            {isLoading ? <div className="loading">Loading!</div> : null}
            <form className="todolist-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="todolist-form_input"
                    placeholder="Введите текст задачи"
                    onChange={handleInputChange}
                    value={inputValue}
                />
                <button type="submit" className="todolist-form_submit">
                    Добавить
                </button>
            </form>
        </>
    );
};

export default NewTaskForm;
