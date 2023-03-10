import { useRef, useState } from 'react';

const Comment = ({ comment, onDeleteComment, postId, onUpdateComment }) => {
  const [isCommentEditBtn, setIsCommentEditBtn] = useState(false);
  const editComment = useRef();
  let editCommentBtn = isCommentEditBtn ? '완료' : '수정';


  const onClickEditCommentBtn = () => {
    setIsCommentEditBtn(true);
  };
  const onCloseEditCommentBtn = () => {
    if (comment.content === editComment.current.value) return setIsCommentEditBtn(false);
    const id = postId;
    const commentId = comment.id;
    const newComment = editComment.current.value;
    onUpdateComment(id, commentId, newComment);
    setIsCommentEditBtn(false);
  };
  return (
    <div
      style={{
        border: '1px solid #000',
      }}
    >
      <h6>{comment.User.nickName}</h6>
      {isCommentEditBtn ? (
        <textarea ref={editComment} defaultValue={comment.content}></textarea>
      ) : (
        <p>{comment.content}</p>
      )}
      {comment.myComment && (
        <>
          <button onClick={() => onDeleteComment(postId, comment.id)} type="button">
            삭제
          </button>
          <button onClick={isCommentEditBtn ? onCloseEditCommentBtn : onClickEditCommentBtn}>
            {editCommentBtn}
          </button>
        </>
      )}
    </div>
  );
};
export default Comment;
