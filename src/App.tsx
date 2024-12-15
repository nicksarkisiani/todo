// import {useState} from "react";
// import {Task} from "./types";



import {useTypedSelector} from "./hooks/useTypedSelector.ts";
import {Outlet} from "react-router";

function App() {

    const {tasks} = useTypedSelector(state => state.tasks)

    console.log(tasks)

    // const [tasks, setTasks] = useState<Task[]>([])

  return (
    <>
        Main
        <Outlet />
    </>
  )
}

export default App
