import { Post } from "@/service/posts";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

export default function PostsGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard key={post.path} post={post} />
        </li>
      ))}
    </ul>
  );
}
