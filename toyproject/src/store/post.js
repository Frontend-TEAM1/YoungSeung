const { MockPost } = require("__mocks__/post");


const initialState = MockPost(6);

// dispatcher
const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default reducer;