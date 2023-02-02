import styled from "styled-components";
import { flexAlignCenter } from "styles/common";

function Movie({title, poster_path, vote_average, ...rest}) {

    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';


    return (
        <S.Wrapper>  
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
            <S.Info>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </S.Info>
        </S.Wrapper>
    )
}

export default Movie;

const Wrapper = styled.div`
    width: 150px;
    border: 1px solid black;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 20px;
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.5);
    & > img {
        max-width: 100%;
    }
`;

const Info = styled.div`
    ${flexAlignCenter}
    padding: 20px;
    justify-content: space-between;
    
    & > span {
        margin-left: 10px;
        font-size: 14px;
    }
`;


// eslint-disable-next-line
const S = {
    Wrapper,
    Info,
}