import { useParams } from 'react-router-dom';
import { posts } from './Blog'

function PostDetail() {
    const param = useParams();
    const id = param.id;
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-gray-900'>{post.title}</h2>
            <p>{post.excerpt}</p>
        </div>
    );
}

export default PostDetail
