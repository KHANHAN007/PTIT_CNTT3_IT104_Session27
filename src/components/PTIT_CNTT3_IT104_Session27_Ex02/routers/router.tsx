import { createBrowserRouter } from "react-router-dom";
import ProductList, { products } from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

export const routes = createBrowserRouter([
    {
        path: '/product',
        element:<ProductList />
    },
    {path:'/product/:id',element:<ProductDetail products={products} /> }
])