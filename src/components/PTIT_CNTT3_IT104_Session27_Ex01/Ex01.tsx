import {RouterProvider } from 'react-router-dom'
import { router } from './routers/router'

function Ex01() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Ex01
