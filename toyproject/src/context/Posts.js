import { faker } from '@faker-js/faker';
import { MockPost } from '__mocks__/post';

const { createContext, useContext, useState } = require('react');

export const DateGap = (nowDate, postDate) => {
  if((nowDate - postDate) === 0) return '4시간 이내..'
  if((nowDate - postDate) === 1) return '1일전'
  if((nowDate - postDate) === 2) return '2일전'
  if((nowDate - postDate) === 3) return '3일전'
  return false;
}

export const today = faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z')


const initialState = MockPost(6);


export const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

const ContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState)
  return <PostsContext.Provider value={[state,setState]}>{children}</PostsContext.Provider>;
};

export default ContextProvider;