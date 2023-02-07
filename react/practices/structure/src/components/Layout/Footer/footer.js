import styled from 'styled-components';

function BasicFooter() {
  return <S.Wrapper>Footer</S.Wrapper>;
}

export default BasicFooter;

const Wrapper = styled.header`
  background-color: #1a2456;
  color: #efc2b3;
  padding: 20px;
  height: 25vh;
`;

const S = {
  Wrapper,
};
