import { faker } from '@faker-js/faker';
import shortid from 'shortid';

const { MockPost } = require('__mocks__/post');

const initialState = MockPost(6);

// dispatcher
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'ADD_COMMENT':
      const newAddState = [...state];
      const AddUser = {
        User: {
          id: shortid.generate(),
          nick_name: faker.name.firstName(),
          profile_img: faker.image.avatar(),
        },
        content: action.payload,
        createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
        myComment: 'Y',
      };
      const newAddComment = [...newAddState.Comments, AddUser];
      newAddState.Comments = newAddComment;
      return newAddState;
    case 'UPDATE_COMMENT':
      const newUpdateState = [...state];
      const findComment = newUpdateState.Comments.find(
        (comment) => comment.id === action.payload.id
      );
      findComment.content = action.payload.content;
      return newUpdateState;
    case 'DELETE_COMMENT':
      const newDeleteState = [...state];
      const newComment = newDeleteState.Comments.filter((comment) => comment.id !== action.payload);
      newDeleteState.Comments = newComment;
      return newDeleteState;
    default:
      return state;
  }
};

export default reducer;
