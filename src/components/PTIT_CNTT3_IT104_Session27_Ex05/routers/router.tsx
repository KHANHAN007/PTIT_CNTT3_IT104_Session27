import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
export const routers = createBrowserRouter([
    {
        path: '/blog', element: <Blog />,
        children: [
            {
                path: 'posts', element: <Posts />
            },
            {
                path: 'posts/postdetail/:id', element: <PostDetail />
            }
        ]
    },

])      