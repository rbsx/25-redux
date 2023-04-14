import { useEffect } from "react";
import TasksList from "./TasksList";
import { loadTask } from "../store/tasks/actions";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTask());
    }, [dispatch]);

    return (
        <div className="page">
            <section className="todolist">
                <TasksList />
            </section>
        </div>
    );
};

export default App;
