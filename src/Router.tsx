import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ErrorHandler from "./pages/ErrorHandler/Error";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        errorElement: <ErrorHandler />
    }
])

export default Router;