import styled from 'styled-components';

function SecondDetail() {
  return (
    <S.Wrapper>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </S.Wrapper>
  );
}
export default SecondDetail;

const Wrapper = styled.header`
  background-color: #cebee1;
  margin: 0 auto;
  margin-top: 50px;
  width: 60%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;


  & > div {
    background-color: #a297bd;
    width: 30%;
    height: 30%;
    margin: 10px;
  }
`;

const S = {
  Wrapper,
};
