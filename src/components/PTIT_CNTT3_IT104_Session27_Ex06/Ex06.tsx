import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'

function Ex06() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Ex06     