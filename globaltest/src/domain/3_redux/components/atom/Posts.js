import Post from './Post/Post';

const AllPosts = ({ posts, onDeletePost, onAddComment, onDeleteComment }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={index}
          post={post}
          onDeletePost={onDeletePost}
          onAddComment={onAddComment}
          onDeleteComment={onDeleteComment}
        />
      ))}
    </div>
  );
};
export default AllPosts;
