import { createAction } from '../utils/createAction';

export const IngredientsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BUTTON':
      return [
        ...state,
        { id: state.length + 1, name: action.payload.name, price: action.payload.price },
      ];
    case 'DELETE_BUTTON':
      return state.filter((ingredient) => ingredient.id !== action.payload.id);
    default:
      window.alert('error');
  }
};

export const ADD_BUTTON = createAction('ADD_BUTTON');
export const DELETE_BUTTON = createAction('DELETE_BUTTON');
