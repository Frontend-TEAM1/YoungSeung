import React, { useReducer } from 'react';
import NavigateButton from '../../../../components/NavigateButton';
import { ADD_BUTTON, DELETE_BUTTON, IngredientsReducer } from '../../../../store/1_reducer';
import Q1Form from '../atom/Form';
import ReducerQ1List from '../atom/List';

const ReducerQ1Page = () => {
  /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기

      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */
  /* 
   1. 로직 분리 -> useReducer 활용 
   2. ADD_BUTTON , DELETE_BUTTON (불변성 생각)
   3. createAction을 통해 코드 간결화, 가독성 증가
   4. ReducerQ1List에 삭제함수 만들고 전달, Q1Form에 보낼 onSubmit 함수 만들기
   5. Q1Form안에 onSubmit으로 사용하면 e.preventDefault()를 사용하여 form 태그의 기본성질을 막아줄 필요가 있다.
   */

  const [ingredients, dispatch] = useReducer(IngredientsReducer, [
    { id: 1, name: '피자 도우', price: 1000 },
    { id: 2, name: '토마토 소스', price: 500 },
    { id: 3, name: '치즈', price: 1000 },
    { id: 4, name: '피망', price: 500 },
    { id: 5, name: '양파', price: 500 },
  ]);

  const onSubmit = (name, price) => {
    dispatch(ADD_BUTTON({ name, price }));
  };

  const onIngredientsDeleteBtn = (id) => {
    dispatch(DELETE_BUTTON({ id }));
  };

  return (
    <>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List onIngredientsDeleteBtn={onIngredientsDeleteBtn} ingredients={ingredients} />
      </table>
      <Q1Form onSubmit={onSubmit} />
      <NavigateButton isFistPage to={'/2_context/q1'} />
    </>
  );
};
export default ReducerQ1Page;
