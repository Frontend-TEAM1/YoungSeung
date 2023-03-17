import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ListApi from 'apis/listApi';

// value
const initialState = {
	issues: [],
	getTodoState: {
		loading: false,
		done: false,
		err: null,
	},
};

// reducer
export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		//add todos
		builder.addCase(getIssues.pending, state => {
			state.getTodoState.loading = true;
		});

		builder.addCase(getIssues.fulfilled, (state, action) => {
			state.issues = action.payload;
			state.getTodoState.loading = false;
			state.getTodoState.done = true;
			state.getTodoState.err = null;
		});

		builder.addCase(getIssues.rejected, (state, action) => {
			state.getTodoState.loading = false;
			state.getTodoState.done = true;
			state.getTodoState.err = action.payload;
		});

		//get todos

		//update todos

		//delete todos
	},
});

// export const addTodo = createAsyncThunk('todo/addTodo', async todo => {
// 	const res = await axios.post('/api/todo', todo);
// 	return res.data;
// });

export const getIssues = createAsyncThunk('issue/getIssues', async issue => {
	const res = await ListApi.getList(issue);
	console.log(res.data);
	return res.data;
});

/* 
dispatch(요청) -- 미들웨어(thunk, addTodo) -- dispatch(대기중) --- reducer (o) -- 대기중에 맞는 비즈니스 로직 실행 (loading = true)

---- 비동기 종료 후

미들웨어 - dispatch(성공/실패) - reducer (o) --- 성공이나 실패 비즈니스 로직 실행

*/
