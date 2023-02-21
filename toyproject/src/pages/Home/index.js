import { today, usePostsContext } from 'context/Posts';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MockPost } from '__mocks__/post';
import DiaryList from './components/DiaryList/DiaryList';

// export const Posts = MockPost(5);

// for (let i = 0; i < Posts.length; i++) {
//   Posts[i].idx = i;
// }

// console.log(Posts);



function HomePage() {
  const [data, setData] = usePostsContext();

  useEffect(()=>{
    const newData = [...data]
    for (let i = 0; i < newData.length; i++) {
      newData[i].idx = i;
    }
    setData(newData);
  }, data)

  // console.log(data);
  /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
  // console.log(String(Posts.createdAt));

  return (
    <>
    <S.TodayDate>오늘의 날짜 : {today.toString()}</S.TodayDate>
      <S.Title>공개 일기를 보여드려요</S.Title>
      <DiaryList data={data} />
    </>
  );
}

export default HomePage;

const Title = styled.div`
  text-align: center;
  color: orange;
  font-size: 25px;
  font-weight: bold;
  margin: 30px 0;
`;

const TodayDate = styled.div`
text-align: center;
font-size: 2rem;
font-weight: bold;
margin: 30px 0;
`;

const S = {
  Title,
  TodayDate,
};
