import { faker } from '@faker-js/faker';
import shortid from 'shortid';
import { createAction } from '../utils/createAction';
import { MockPosts } from '../__mock__/mockPosts';

const initialState = MockPosts(10);

// 게시글 추가, 게시글 삭제, 게시글 수정

export const ADD_POST = createAction('ADD_POST');
export const DELETE_POST = createAction('DELETE_POST');
export const UPDATE_POST = createAction('UPDATE_POST');
export const ADD_COMMENT = createAction('ADD_COMMENT');
export const DELETE_COMMENT = createAction('DELETE_COMMENT');
export const UPDATE_COMMENT = createAction('UPDATE_COMMENT');

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          Comments: [],
          Post_img: faker.image.imageUrl(),
          User: {
            id: shortid.generate(),
            nickName: faker.name.firstName(),
            profileImg: faker.image.image(),
          },
          //   입력받은 컨텐트
          content: action.payload.content,
          createdAt: new Date(),
          myPost: true,
          //   입력받은 타이틀
          title: action.payload.title,
        },
      ];
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload);
    case 'UPDATE_POST':
      const newPostUpdateContent = [...state];
      const index = newPostUpdateContent.findIndex((post) => post.id === action.payload.id);
      newPostUpdateContent[index].content = action.payload.content;
      return newPostUpdateContent;
    case 'ADD_COMMENT':
      const newPostAddComment = [...state];
      const findPostAdd = newPostAddComment.find((post) => post.id === action.payload.id);
      findPostAdd.Comments = [
        ...findPostAdd.Comments,
        {
          User: {
            id: shortid.generate(),
            nickName: action.payload.nickName,
            profileImg: faker.image.image(),
          },
          content: action.payload.content,
          createdAt: new Date(),
          id: shortid.generate(),
          myComment: true,
        },
      ];
      return newPostAddComment;
    case 'DELETE_COMMENT':
      const newPostDeleteComment = [...state];
      const findPostDelete = newPostDeleteComment.find((post) => post.id === action.payload.postId);
      findPostDelete.Comments = findPostDelete.Comments.filter(
        (comment) => comment.id !== action.payload.commentId
      );
      return newPostDeleteComment;
    case 'UPDATE_COMMENT':
      const newPostUpdateComment = [...state];
      const findPostUpdate = newPostUpdateComment.find((post)=>post.id === action.payload.postId);
      const findComment = findPostUpdate.Comments.find((comment)=>comment.id === action.payload.commentId);
      findComment.content = action.payload.editContent;
      return newPostUpdateComment;
    default:
      return state;
  }
};

export default reducer;


