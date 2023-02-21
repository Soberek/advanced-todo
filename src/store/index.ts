import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './todo/slices/todos-slice';

export const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
	localStorage.setItem('todos', JSON.stringify(store.getState().todos.todos));
});
/*
!Exports
*/

export * from './todo/slices/todos-slice';
