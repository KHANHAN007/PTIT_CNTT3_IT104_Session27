import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'

function Ex07() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Ex07
