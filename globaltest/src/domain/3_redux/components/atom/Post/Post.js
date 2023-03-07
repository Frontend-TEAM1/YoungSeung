import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_POST } from '../../../../../store/4_redux';
import Comment from '../Comment/Comment';
import CommentForm from '../Comment/Form';
import UserCard from '../UserCard/Card';

const Post = ({ post, onDeletePost, onAddComment, onDeleteComment, onUpdateComment }) => {
  const [isContentEditBtn, setIsContentEditBtn] = useState(false);
  const editContent = useRef()
  const dispatch = useDispatch();
  let editContentBtn = isContentEditBtn ? '완료' : '수정';

  const onClickContentEditBtn = () => {
    setIsContentEditBtn(true);
  };

  const onCloseEditContent = () => {
    if (editContent.current.value === post.content) return setIsContentEditBtn(false);
    const id = post.id;
    const content = editContent.current.value;
    dispatch(UPDATE_POST({ id, content }));
    setIsContentEditBtn(false);
  };

  return (
    <div
      style={{
        border: '1px solid #999',
      }}
    >
      <h2>--PostTitle--</h2>
      <h2>{post.title}</h2>
      <UserCard user={post.User} />
      <h2>--PostContent--</h2>
      {post.myPost && (
        <button onClick={isContentEditBtn ? onCloseEditContent : onClickContentEditBtn}>
          {editContentBtn}
        </button>
      )}
      {isContentEditBtn ? (
        <textarea ref={editContent} defaultValue={post.content}></textarea>
      ) : (
        <p>{post.content}</p>
      )}

      <CommentForm post={post} onAddComment={onAddComment} />
      <div
        style={{
          display: 'table',
          borderCollapse: 'collapse',
          border: '1px solid #000',
        }}
      >
        {post.Comments &&
          post.Comments.map((comment) => (
            <Comment
              key={comment.id}
              postId={post.id}
              comment={comment}
              onDeleteComment={onDeleteComment}
              onUpdateComment={onUpdateComment}
            />
          ))}
      </div>
      {post.myPost && (
        <button onClick={() => onDeletePost(post.id)} type="button">
          삭제
        </button>
      )}
    </div>
  );
};
export default Post;
