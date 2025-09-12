import { posts } from './Blog'
import { NavLink } from 'react-router-dom'

function Posts() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-5">Danh sách bài viết</h1>
      <div className="flex flex-col gap-4">
        {posts.map((p) => (
          <article key={p.id} className="bg-white rounded-lg p-4 shadow-sm border">
            <NavLink to={`/blog/posts/postdetail/${p.id}`}
              className="text-blue-600 font-semibold text-lg block mb-1 hover:underline"
            >
              {p.title}
            </NavLink>
            <p className="text-gray-600 text-sm">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Posts
