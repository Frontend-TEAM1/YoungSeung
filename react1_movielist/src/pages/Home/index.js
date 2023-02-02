import { flexJustifyCenter } from 'styles/common';
import styled from 'styled-components';

import Movie from 'pages/Home/components/Movie';
import movieData from 'movieDummy/movieDummy';
import Head from 'components/Header/Header';
import Foot from 'components/Footer/Footer';

function HomePage() {
  return (
    <>
      <Head />
      <S.Wrapper>
        {movieData.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </S.Wrapper>
      <Foot />
    </>
  );
}

export default HomePage;

const Wrapper = styled.div`
  ${flexJustifyCenter}
  flex-wrap: wrap;
`;

const S = {
  Wrapper,
};
