import { RouterProvider } from 'react-router-dom'
import { routes } from './routers/router'

function Ex02() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default Ex02
