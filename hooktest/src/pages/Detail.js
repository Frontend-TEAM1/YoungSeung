import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import productList from '../__mock__/products.json';
function DetailPage() {
  const params = useParams();
  const { productNumber } = params;
  const [List, setList] = useState(productList);

  const product = List.products.find((product) => product.productNumber === productNumber);
  const {
    Review,
    productDetail,
    productName,
    productPrice,
    productRating,
    productReview,
    productSize,
  } = product;

  console.log(product);

  const ratingStar = (rating) => {
    let star = ''
    const fillStar = '★'
    const blankStar = '☆'
    for(let i=0;i<5;i++){
      
    }
  }
  return (
    <div>
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */}
      {params.productNumber}
      <S.Img>상품이미지</S.Img>
      <S.Content>{productDetail.productDetailInfo}</S.Content>
      <h4>{productName}</h4>
      <p>상품번호: {productNumber}</p>
      <p>가격: {productPrice}</p>
      <p>사이즈: {productSize}</p>
      <p>평점: {productRating}</p>
      <p>리뷰: {productReview}</p>
      {Review.map((review) => {
        return (<S.Review>
          <div>{review.reviewer}</div>
          <div>{review.review}</div>
          <div>{review.rating}</div>
        </S.Review>);
      })}
    </div>
  );
}
export default DetailPage;

const Img = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;

const Content = styled.div`
  border: 1px solid black;
  padding: 20px;
  width: 50%;
  margin: 10px auto;
`;

const Review = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
margin: 20px auto;
border: 1px solid black;
padding: 20px;

`;

const S = {
  Img,
  Content,
  Review,
};
