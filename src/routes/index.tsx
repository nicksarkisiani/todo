import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import AddTaskPage from "../pages/AddTask/AddTaskPage.tsx";
import ErrorElement from "./ErrorElement.tsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/add',
                element: <AddTaskPage />
            }
        ]
    }
])