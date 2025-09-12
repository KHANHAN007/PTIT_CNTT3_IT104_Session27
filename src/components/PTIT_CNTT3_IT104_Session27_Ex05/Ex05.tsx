import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/router'
function Ex05() {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  )
}

export default Ex05
