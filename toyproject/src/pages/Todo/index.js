import { usePostsContext } from 'context/Posts';
import { Posts } from 'pages/Home';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailComment from './components/DetailComment/detailComment';
import DetailContent from './components/DetailContent/detailContent';
import DetailTitle from './components/DetailTitle/detailTItle';

function TodoPage() {
  // let { id } = useParams();
  // console.log(id);

  const { id } = useParams();
  // const [newData, setData] = usePostsContext();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  // const data = newData.find((item) => item.id == id);
  {
    posts &&
      posts.map((post) => {
        return (
          <>
            <S.Wrapper>
              <DetailTitle post={post} id={id} />
              <DetailContent post={post} id={id} />
            </S.Wrapper>
            <DetailComment />
          </>
        );
      });
  }
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
