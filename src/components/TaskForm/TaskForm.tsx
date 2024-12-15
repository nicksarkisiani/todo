import {SyntheticEvent, useState} from "react";
import {useActions} from "../../hooks/useActions.ts";

const TaskForm = () => {

    const [text, setText] = useState("")
    const {addTask} = useActions();

    const save = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask(text);
        setText("");
    }

    return (
        <form onSubmit={save}>
            <label htmlFor="">Describe task</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button>Create Task</button>
        </form>
    );
};

export default TaskForm;