import { useState } from 'react';
import styled from 'styled-components';

function Comment({ user, onChangeContent, content, setContent }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(content);

  const onEditBtn = () => {
    setIsEdit((prev) => !prev);
  };
  const onChangeEditContent = () => {
    setEditContent(editContent)
  }

  const onDeleteBtn = () => {};

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{user.User.nickname}</span>
      </p>
      <p>
        댓글 내용:{' '}
        <span>{!isEdit ? user.content : <input onChange={onChangeEditContent} value={editContent} />}</span>
      </p>
      {user.myComment && (
        <>
          <button onClick={onEditBtn}>수정</button>
          <button onClick={onDeleteBtn}>삭제</button>
        </>
      )}
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
