import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
	id: string;
	title: string;
	completed: boolean;
	isEditing: boolean;
}

interface TodoList {
	todos: Todo[];
	filter: 'ALL' | 'ACTIVE' | 'COMPLETED';
}

const initialState: TodoList = {
	filter: 'ALL',
	todos: [
		{
			id: '1',
			title: 'Zrobić 1500 godzin programowania ⏰',
			completed: false,
			isEditing: false,
		},
		{
			id: '2',
			title: 'Skupić się na tym ile robię, a nie co robię 👩‍🏭',
			completed: true,
			isEditing: false,
		},
	],
};

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<{ title: string }>) => {
			state.todos.push({
				id: uuidv4(),
				title: action.payload.title,
				completed: false,
				isEditing: false,
			});
		},
		removeCompleted: (state) => {
			state.todos = state.todos.filter((todo) => todo.completed !== true);
		},
		update: (state, action) => {},
		complete: (state, action: PayloadAction<{ id: string }>) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
			);
		},
		filterAllTodos: (state) => {
			state.filter = 'ALL';
		},
		filterCompletedTodos: (state) => {
			state.filter = 'COMPLETED';
		},
		filterActiveTodos: (state) => {
			state.filter = 'ACTIVE';
		},
	},
});

export const { add, removeCompleted, update, complete, filterAllTodos, filterActiveTodos, filterCompletedTodos } =
	todoSlice.actions;
export const todoReducer = todoSlice.reducer;
