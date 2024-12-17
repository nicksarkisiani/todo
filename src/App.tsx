import {useTypedSelector} from "./hooks/useTypedSelector.ts";
import {Outlet} from "react-router";

function App() {

    const {tasks} = useTypedSelector(state => state.tasks)

    console.log(tasks)


    return (
        <>
            Main
            <Outlet/>
        </>
    )
}

export default App
