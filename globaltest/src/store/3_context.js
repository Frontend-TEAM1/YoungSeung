import { createContext, useReducer } from 'react';
import { createAction } from '../utils/createAction';

const initialState = [{ id: 1, name: '홍길동', nickname: '히히' }];

export const UserListContext = createContext();
export const UserListDispatchContext = createContext();

export const ADD_BUTTON = createAction('ADD_BUTTON')
export const ADD_STATUS_BUTTON = createAction('ADD_STATUS_BUTTON')
export const RESET_BUTTON = createAction('RESET_BUTTON')
export const SUBMIT_BUTTON = createAction('SUBMIT_BUTTON')

const UserListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BUTTON':
      return [
        ...state,
        { id: state.length + 1, name: action.payload.name, nickname: action.payload.nickname },
      ];
    case 'ADD_STATUS_BUTTON':
      const newUserList = state.map(user=>{
        return {...user, isEdit:true};
      })
      return newUserList;
    case 'RESET_BUTTON':
      return initialState;
    case 'SUBMIT_BUTTON':
      const filterList = state.filter((user)=>user.isEdit === true);
      if(filterList.length===0){
        console.log('state true가 없습니다')
        return state;
      }
      console.log(filterList);
      return filterList;
    default:
      window.alert('error');
      return state;
  }
};

const UserListProvider = ({ children }) => {
  const [userList, dispatch] = useReducer(UserListReducer, initialState);

  return (
    <UserListContext.Provider value={userList}>
      <UserListDispatchContext.Provider value={dispatch}>{children}</UserListDispatchContext.Provider>
    </UserListContext.Provider>
  );
};

export default UserListProvider;
