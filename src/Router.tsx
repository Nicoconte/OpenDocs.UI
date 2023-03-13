import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandler from "./pages/ErrorHandler/Error";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Holaaa</h1>,
        errorElement: <ErrorHandler />
    }
])

export default Router;