import { DateGap, today } from 'context/Posts';
import { days } from 'pages/Home/components/DiaryList/Diary/CardTitle/cardTitle';
import { useState } from 'react';
import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

function Comments({ data, item, newData, setData, onDeleteBtn }) {
    const [parse, setParse] = useState(DateGap(today.getDate(), item.createdAt.getDate()));

  const [editComment, setEditComment] = useState(item.content);
  
  const [editState, setEditState] = useState(false);

  const onClickEditBtn = () => {
    setEditState(true);
  };

  const onCloseEditBtn = () => {
    if (item.content === editComment) return setEditState(false);
    item.content = editComment;
    setData(newData);
  };

  const onChangeEditContent = (e) => {
    setEditComment(e.target.value);
  };

  return (
    <S.Comment>
      <S.Info>
        <img src={item.User.profile_img} alt="이미지" />
        <div>{item.User.nick_name}</div>
      </S.Info>
      {editState ? (
        <input onChange={onChangeEditContent} value={editComment} />
      ) : (
        <div>{item.content}</div>
      )}
      {item.myComment === 'Y' && (
        <S.Button>
          <button onClick={editState ? onCloseEditBtn : onClickEditBtn}>수정</button>
          <button onClick={() => onDeleteBtn(item.User.id)}>삭제</button>
        </S.Button>
      )}
      <S.Date>
      {parse ? (
          <div>{DateGap(today.getDate(), item.createdAt.getDate())}. </div>
        ) : (
          <>
            <div>{item.createdAt.getFullYear()}. </div>
            <div>{item.createdAt.getMonth() + 1}. </div>
            <div>{item.createdAt.getDate()}. </div>
            <div>{days[item.createdAt.getDay()]}. </div>
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
