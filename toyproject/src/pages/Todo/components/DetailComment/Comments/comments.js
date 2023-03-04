
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';
import { DateGap, days, today } from 'utils/dateParse';

function Comments({ comment, updateComment, deleteComment, id }) {
  const parse = useRef(DateGap(today.getDate(), comment.createdAt.getDate()));

  const [editComment, setEditComment] = useState(comment.content);
  const [editState, setEditState] = useState(false);

  const onClickEditBtn = () => {
    setEditState(true);
  };

  const onCloseEditBtn = () => {
    if (comment.content === editComment) return setEditState(false);
    const commentId = comment.User.id;
    updateComment(id, commentId, editComment);
    setEditState(false);
  };

  const onChangeEditContent = (e) => {
    setEditComment(e.target.value);
  };

  const onDeleteBtn = () => {
    if (window.confirm('삭제하겠습니까?')) {
      const commentId = comment.User.id;
      deleteComment(id, commentId);
    }
  };

  return (
    <S.Comment>
      <S.Info>
        <img src={comment.User.profile_img} alt="이미지" />
        <div>{comment.User.nick_name}</div>
      </S.Info>
      {editState ? (
        <input onChange={onChangeEditContent} value={editComment} />
      ) : (
        <div>{comment.content}</div>
      )}
      {comment.myComment === 'Y' && (
        <S.Button>
          <button onClick={editState ? onCloseEditBtn : onClickEditBtn}>수정</button>
          <button onClick={onDeleteBtn}>삭제</button>
        </S.Button>
      )}
      <S.Date>
        {parse.current ? (
          <div>{DateGap(today.getDate(), comment.createdAt.getDate())}. </div>
        ) : (
          <>
            <div>{comment.createdAt.getFullYear()}. </div>
            <div>{comment.createdAt.getMonth() + 1}. </div>
            <div>{comment.createdAt.getDate()}. </div>
            <div>{days[comment.createdAt.getDay()]}. </div>
          </>
        )}
      </S.Date>
    </S.Comment>
  );
}

const Comment = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  width: 50%;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px auto;
`;

const Info = styled.div`
  text-align: center;
`;

const Date = styled.div`
  ${flexAlignCenter}
`;

const Button = styled.div``;

const S = {
  Comment,
  Info,
  Date,
  Button,
};

export default Comments;
