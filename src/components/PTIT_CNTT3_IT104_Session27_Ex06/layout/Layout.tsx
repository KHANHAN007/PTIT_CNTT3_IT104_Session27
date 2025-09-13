import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="flex gap-4 p-4 bg-gray-200">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `inline-flex items-center px-4 py-2 rounded ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/detail"
          className={({ isActive }) =>
            `inline-flex items-center px-4 py-2 rounded ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`
          }
        >
          Detail
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            `inline-flex items-center px-4 py-2 rounded ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`
          }
        >
          Product
        </NavLink>
      </div>{" "}
      <Outlet />
    </div>
  );
}

export default Layout;
