import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

function Ex04() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default Ex04
