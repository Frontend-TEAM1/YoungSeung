import { DateGap, today } from 'context/Posts';
import { useState } from 'react';
import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

function CardTitle({ data }) {
  // console.log(data.createdAt.getFullYear());
  // console.log(data.createdAt.getMonth());
  // console.log(data.createdAt.getDate());
  // console.log(data.createdAt.getDay());
  const [parse, setParse] = useState(DateGap(today.getDate(), data.createdAt.getDate()));
  // console.log(parse);
  // console.log(today);
  return (
    <S.Wrapper>
      <div>
        <img src={data.User.profile_img} width={80} height={80} />
        <div>{data.User.nick_name}</div>
      </div>
      <S.DateWrapper>
        {parse ? (
          <div>{DateGap(today.getDate(), data.createdAt.getDate())}. </div>
        ) : (
          <>
            <div>{data.createdAt.getFullYear()}. </div>
            <div>{data.createdAt.getMonth() + 1}. </div>
            <div>{data.createdAt.getDate()}. </div>
            <div>{days[data.createdAt.getDay()]}. </div>
          </>
        )}
      </S.DateWrapper>
    </S.Wrapper>
  );
}

export default CardTitle;

const Wrapper = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  padding: 20px;
  border-bottom: 5px solid black;
  margin: 10px 20px;

  & > div:first-child {
    ${flexAlignCenter}
  }

  & > div:first-child > * {
    margin: 0 10px;
  }

  & > div:first-child > img {
    border-radius: 50%;
  }
`;

const DateWrapper = styled.div`
  ${flexAlignCenter}
`;

const S = {
  Wrapper,
  DateWrapper,
};
