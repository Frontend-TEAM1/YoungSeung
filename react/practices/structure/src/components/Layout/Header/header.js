import styled from 'styled-components';

function BasicHeader() {
  return <S.Wrapper>Header</S.Wrapper>;
}

export default BasicHeader;

const Wrapper = styled.header`
  background-color: #1a2456;
  color: #EFC2B3;
  padding: 20px;
  position: fixed;
  width: 95%;
  top: 10px;
  right: 0;
  left: 0;
  margin: 0 auto;
`;


const S = {
    Wrapper,
}