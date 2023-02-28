import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';
import CardContent from './CardContent/cardContent';
import CardTitle from './CardTitle/cardTitle';

function Diary({ data }) {
  // console.log(data);

  // const navigate = useNavigate();

  // console.log(data);
  return (
    <S.Wrapper>
      {data.map((data) => {
        return (
          <StyledLink to={`/todo/post/${data.id}`}>
            <S.Card>
              <CardTitle data={data} />
              <CardContent data={data} />
            </S.Card>
          </StyledLink>
        );
      })}
    </S.Wrapper>
  );
}
export default Diary;

const Wrapper = styled.div`
  ${flexCenter}
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`;

const Card = styled.div`
  margin: 20px;
  width: 450px;
  height: 450px;
  border-radius: 20px;
  box-shadow: 8px 8px 15px #f8f5f9;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const S = {
  Wrapper,
  Card,
};
