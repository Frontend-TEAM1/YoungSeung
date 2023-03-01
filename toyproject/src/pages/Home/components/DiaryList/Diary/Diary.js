// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

import { Link } from "react-router-dom";

function Diary({ data }) {
  return (
    <StyledLink to={`/todo/post/${data.id}`}>
      <S.Card>
        <CardTitle data={data} />
        <CardContent data={data} />
      </S.Card>
    </StyledLink>
  );
}
export default Diary;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: lightcoral;
//   width: 70vw;
//   height: 100vh;
//   margin: 0 auto;
// `;

// const Card = styled.div`
//   background-color: yellow;
//   margin: 20px;
//   cursor: pointer;
// `;

// const S = {
//   Wrapper,
//   Card,
// };

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;