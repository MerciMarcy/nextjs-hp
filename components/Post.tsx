import Link from 'next/link';
import { typeofPosts } from '../types/types';

interface PostProps {
  post: typeofPosts;
}

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <span>{post.id}</span>
      {' : '}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};
export default Post;
