import { usePostsContext } from 'context/Posts';
import { Posts } from 'pages/Home';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailComment from './components/DetailComment/detailComment';
import DetailContent from './components/DetailContent/detailContent';
import DetailTitle from './components/DetailTitle/detailTItle';

function TodoPage() {
  // let { id } = useParams();
  // console.log(id);

  let { id } = useParams();
  const [newData, setData] = usePostsContext();
  const data = newData.find((item) => item.id == id);

  return (
    <>
      <S.Wrapper>
        <DetailTitle data={data} />
        <DetailContent data={data} />
      </S.Wrapper>
      <DetailComment newData={newData} data={data} setData={setData} />
    </>
  );
}

export default TodoPage;

const BigWrapper = styled.div``;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;

  width: 50%;
  background-color: beige;
  padding: 10px 0;
  border-radius: 25px;
`;

const S = {
  Wrapper,
  BigWrapper,
};

