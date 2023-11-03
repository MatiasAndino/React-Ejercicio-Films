import { createBrowserRouter } from "react-router-dom";
import homeView from "../../features/home/views/home_view";
import loginView from "../../features/login/views/login_view";


export const appRouter = createBrowserRouter([
    {
        path: '/',
        Component: homeView,
    },
    {
        path: '/login',
        Component: loginView,
    }
]);