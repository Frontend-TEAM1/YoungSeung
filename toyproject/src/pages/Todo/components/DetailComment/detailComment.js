import { faker } from '@faker-js/faker';
import shortId from 'shortid';
import { days } from 'pages/Home/components/DiaryList/CardTitle/cardTitle';
import { useState } from 'react';
import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';
import Comments from './Comments/comments';

function DetailComment({ data, setData, newData }) {
  
  const [comment, setComment] = useState('');
  const [cmt, setCmt] = useState(data.Comments);

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onAddComment = () => {
    const newUser = {
      User: {
        id: shortId.generate(),
        nick_name: faker.name.firstName(),
        profile_img: faker.image.avatar(),
      },
      content: comment,
      createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
      myComment: 'Y',
    };
    data.Comments.push(newUser);

    setData(newData);
    setComment('');
  };
  const onDeleteBtn = (id) => {
    if (window.confirm('삭제하겠습니까?')) {
      const Delete = cmt.filter((user) => user.User.id !== id);
      setCmt(Delete);
    }
  };

  return (
    <>
      <S.Wrapper>
        <textarea
          onChange={onChangeComment}
          placeholder="댓글을 작성해주세요"
          value={comment}
        ></textarea>
        <button onClick={onAddComment}>작성</button>
      </S.Wrapper>
      {cmt.map((item) => {
        return <Comments data={data} item={item} newData={newData} setData={setData} onDeleteBtn={onDeleteBtn} />;
      })}
    </>
  );
}

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid red; */
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;

  & > textarea {
    width: 90%;
    height: 15vh;
    background-color: #e9e9e9;
    font-size: 1.2rem;
    border-radius: 10px;
  }

  & > button {
    background-color: #f9d72f;
    height: 100%;
    padding: 20px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const S = {
  Wrapper,
};

export default DetailComment;
