
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'

function Ex08() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Ex08