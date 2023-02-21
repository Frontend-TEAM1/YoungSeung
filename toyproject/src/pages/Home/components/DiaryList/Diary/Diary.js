// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// function Diary({ data }) {
//   const navigate = useNavigate();

//   const onChangePage = () => {
//     return navigate('/todo');
//   };

//   // console.log(data);
//   return (
//     <S.Wrapper>
//       {data.map((data) => {
//         // console.log(data.User.nick_name);
//         return (
//           <S.Card onClick={onChangePage} data={data}>
//             <div>{data.User.nick_name}</div>
//             <div>{data.id}</div>
//           </S.Card>
//         );
//       })}
//     </S.Wrapper>
//   );
// }
// export default Diary;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: lightcoral;
//   width: 70vw;
//   height: 100vh;
//   margin: 0 auto;
// `;

// const Card = styled.div`
//   background-color: yellow;
//   margin: 20px;
//   cursor: pointer;
// `;

// const S = {
//   Wrapper,
//   Card,
// };
