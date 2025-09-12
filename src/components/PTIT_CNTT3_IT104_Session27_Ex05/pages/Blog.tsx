import { NavLink, Outlet } from 'react-router-dom'

export const posts = [
  { id: 1, title: 'Bắt đầu với React', excerpt: 'Giới thiệu về React và cách khởi tạo dự án...' },
  { id: 2, title: 'Sử dụng TailwindCSS', excerpt: 'Tailwind giúp bạn viết CSS nhanh và tiện lợi...' },
  { id: 3, title: 'Giới thiệu về React Router', excerpt: 'Điều hướng trong React với React Router DOM...' },
  { id: 4, title: 'Quản lý state với Redux', excerpt: 'Redux giúp quản lý state tập trung...' },
  { id: 5, title: 'Hooks trong React', excerpt: 'useState, useEffect và các hook phổ biến...' },
]
function Blog() {

  return (
    <div className="min-h-screen font-sans bg-gray-100">
      <aside className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-purple-600 to-indigo-700 text-white p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-white/90" />
            <div>
              <div className="font-semibold text-lg">My Blog</div>
              <div className="text-sm opacity-90">Chia sẻ kiến thức</div>
            </div>
          </div>

          <nav className="mt-4">
            <div className="flex flex-col gap-2">
              <button className="text-left px-3 py-2 rounded-md bg-white/10 text-white font-medium">
                <NavLink to="/blog/posts">Posts</NavLink>
              </button>
              <button className="text-left px-3 py-2 rounded-md text-white/90 hover:bg-white/5">
              </button>
              <button className="text-left px-3 py-2 rounded-md text-white/90 hover:bg-white/5">
                Settings
              </button>
            </div>
          </nav>
        </div>

        <div className="text-sm opacity-90">© 2025 My Blog</div>
      </aside>

      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Blog
