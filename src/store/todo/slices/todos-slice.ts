import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Todo {
	id: string;
	title: string;
}

interface TodoList {
	todos: Todo[];
}

const initialState: TodoList = {
	todos: [],
};

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		remove: (state, action) => {},
		update: (state, action) => {},
		complete: (state, action) => {},
	},
});

export const { add, remove, update, complete } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
