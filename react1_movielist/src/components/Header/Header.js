import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Head() {
  return (
    <S.Header>
      <S.SearchWrapper>
        <button>로그인</button>
        <FontAwesomeIcon icon={faBars} color="white" size="2x" />
        <S.Search>
          <input placeholder="영화검색" />
          <button>검색</button>
        </S.Search>
      </S.SearchWrapper>
    </S.Header>
  );
}

export default Head;

const Header = styled.header`
  & > div {
    ${flexCenter}
    justify-content: right;
    padding: 40px;

    & > button {
      background-color: transparent;
      color: white;
      cursor: pointer;
      border: 1px solid #f9f9f9;
      padding: 5px;
    }
  }
`;

const SearchWrapper = styled.div`
  & > * {
    margin-right: 30px;
  }
`;

const Search = styled.div`
  ${flexCenter}
  &>input {
    font-size: 20px;
  }
  & > button {
    font-size: 20px;
    color: white;
    background-color: transparent;
    outline: 1px solid white;
  }
`;

const S = {
  Header,
  Search,
  SearchWrapper,
};
