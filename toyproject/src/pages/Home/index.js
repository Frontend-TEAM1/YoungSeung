import { today, usePostsContext } from 'context/Posts';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MockPost } from '__mocks__/post';
import DiaryList from './components/DiaryList/DiaryList';

function HomePage() {
  const [data, setData] = usePostsContext();
  const posts = useSelector((state)=>state.posts);
  // console.log(posts);
  const [ref, inView] = useInView();

  const fetchNextPage = () => {
    setTimeout(()=>{
      const newMock = MockPost(6);
      setData((prev)=>[...prev, ...newMock]);
    }, 800)
  }


  useEffect(()=>{
    // console.log(useInView);
    if(!inView){
      return
    }
    fetchNextPage()
  }, [inView])

  // console.log(data);
  /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
  // console.log(String(Posts.createdAt));

  return (
    <>
      <S.TodayDate>오늘의 날짜 : {today.toString()}</S.TodayDate>
      <S.Title>공개 일기를 보여드려요</S.Title>
      <div>
        <DiaryList data={data} />
        <div ref={ref}></div>
      </div>
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
