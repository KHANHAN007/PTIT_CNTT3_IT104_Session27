import { createBrowserRouter } from "react-router-dom";
import TaskList, { tasks } from "../pages/TaskList";
import TaskDetail from "../pages/TaskDetail";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<TaskList />
    },
    {
        path: '/task/:id',
        element: <TaskDetail tasks={tasks} />
    }
])