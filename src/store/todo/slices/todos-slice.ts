import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
	id: string;
	title: string;
	completed: boolean;
}

interface TodoList {
	todos: Todo[];
}

const initialState: TodoList = {
	todos: [
		{
			id: '1',
			title: 'Zrobić 1500 godzin programowania ⏰',
			completed: false,
		},
		{
			id: '2',
			title: 'Skupić się na tym ile robię, a nie co robię 👩‍🏭',
			completed: true,
		},
	],
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
		complete: (state, action: PayloadAction<{ id: string }>) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
			);
		},
	},
});

export const { add, remove, update, complete } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
