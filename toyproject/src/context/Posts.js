import { faker } from '@faker-js/faker';
import { MockPost } from '__mocks__/post';

const { createContext, useContext, useState } = require('react');




const initialState = MockPost(6);


export const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

const ContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState)
  return <PostsContext.Provider value={[state,setState]}>{children}</PostsContext.Provider>;
};

export default ContextProvider;