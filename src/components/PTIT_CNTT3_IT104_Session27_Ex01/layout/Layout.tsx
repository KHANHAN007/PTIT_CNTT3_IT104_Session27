import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <header className="bg-white shadow-sm">
                <nav className="max-w-6xl mx-auto flex justify-center items-center gap-4 p-4">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `inline-flex items-center px-4 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `inline-flex items-center px-4 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `inline-flex items-center px-4 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`
                        }
                    >
                        Contact
                    </NavLink>
                </nav>
            </header>

            <main className="max-w-6xl mx-auto p-4">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout