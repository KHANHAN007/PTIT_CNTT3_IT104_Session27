import { createBrowserRouter } from "react-router-dom";
import ProductList from "../pages/ProductList";

export const routes = createBrowserRouter([
    { path: '/', element: <ProductList /> }
])