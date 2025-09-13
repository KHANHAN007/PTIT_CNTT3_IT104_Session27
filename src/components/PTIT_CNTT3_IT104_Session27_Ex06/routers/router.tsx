import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Product from "../pages/Product";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "detail",
                element: <Detail />
            },
            {
                path: "product",
                element: <Product />
            }
        ]
    }
])