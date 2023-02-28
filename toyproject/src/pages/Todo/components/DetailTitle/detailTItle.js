import { DateGap, today } from 'context/Posts';
import { days } from 'pages/Home/components/DiaryList/CardTitle/cardTitle';
import { useState } from 'react';
import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

function DetailTitle({ data }) {
  const [parse, setParse] = useState(DateGap(today.getDate(), data.createdAt.getDate()));
  return (
    <S.Wrapper>
      <div>모두 공개</div>
      <div>
        {data.User.nick_name}
        {data.User.nick_name}
        {data.User.nick_name}
      </div>
      <TitleDetail>
        <div>
          <img src={data.User.profile_img} />
          <div>{data.User.nick_name}</div>
        </div>
        {parse ? (
          <div>{DateGap(today.getDate(), data.createdAt.getDate())}. </div>
        ) : (
          <div>
            <div>{data.createdAt.getFullYear()}. </div>
            <div>{data.createdAt.getMonth() + 1}. </div>
            <div>{data.createdAt.getDate()}. </div>
            <div>{days[data.createdAt.getDay()]}. </div>
          </div>
        )}
      </TitleDetail>
    </S.Wrapper>
  );
}

export default DetailTitle;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  border-bottom: 3px solid black;

  & > div {
    margin: 80px 0;
  }
  & > div:first-child {
    background-color: #f9d72f;
    font-size: 1.2rem;
    font-weight: bold;
    width: 10%;
    text-align: center;
  }
  & > div:nth-child(2) {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const TitleDetail = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;

  & > div:first-child {
    ${flexAlignCenter}
    color: #f9d72f;
  }

  & > div:first-child > * {
    margin: 0px 10px;
  }

  & > div:first-child > img {
    border-radius: 50%;
  }

  & > div:last-child {
    ${flexAlignCenter}
  }
`;
const S = {
  Wrapper,
  TitleDetail,
};
