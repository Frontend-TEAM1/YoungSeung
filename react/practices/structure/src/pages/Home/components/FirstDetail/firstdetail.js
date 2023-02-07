import styled from 'styled-components';

function FirstDetail() {
  return (
    <S.Wrapper>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.Wrapper>
  );
}
export default FirstDetail;

const Wrapper = styled.header`
  background-color: #CEBEE1;
  margin: 50px auto;
  width: 60%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  & > div {
    background-color: #A297BD;
    width: 40%;
    height: 40%;
    margin: 10px;
  }
`;

const S = {
  Wrapper,
};
