import styled from "styled-components";
import { flexAlignCenter } from "styles/common";

function Foot() {
    return(
        <S.Footer>
            <div>
                <span>이용약관&nbsp;&nbsp;&nbsp;|</span>
                <span>&nbsp;&nbsp;&nbsp;개인정보처리방침&nbsp;&nbsp;&nbsp;|</span>
                <span>&nbsp;&nbsp;&nbsp;책임의 한계와 법적고지&nbsp;&nbsp;&nbsp;|</span>
                <span>&nbsp;&nbsp;&nbsp;영화 고객센터</span>
            </div>
            <div>본 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.</div>
            <S.FooterLast>
                <span>NAVER</span>
                <span>Copyright © NAVER Corp. All Rights Reserved.</span>
            </S.FooterLast>
        </S.Footer>
    )
}


export default Foot;

const Footer = styled.footer`
    text-align: center;
    margin-top: 50px;
    color: #a9a9a9;

    & > * {
        margin: 20px 0;
    }
`;

const FooterLast = styled.div`
    & > * {
        margin: 0 10px;
        color: #e9e9e9;
    }
    & > span:first-child {
        letter-spacing: 1px;
        color: #f9f9f9;
    }
`;


const S = {
    Footer,
    FooterLast
}