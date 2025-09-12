import { RouterProvider } from "react-router-dom"
import { routes } from "./routers/router"

function Ex03() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default Ex03
