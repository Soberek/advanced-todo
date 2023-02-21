import Item from './TodoItem';
import AddItemInput from './TodoAddInput';
import TodoFooter from './TodoFooter';
import Box from '@mui/material/Box';

import { useTheme } from '@mui/material';

import { useTypedSelector } from '../../hooks/reduxTypedHooks';
import type { Todo } from '../../store';

const TodoList = () => {
	const theme = useTheme();
	const todos = useTypedSelector((state) => state.todos.todos);
	const filter = useTypedSelector((state) => state.todos.filter);

	let filtered: Todo[] = [];

	if (filter === 'ALL') {
		filtered = todos;
	} else if (filter === 'COMPLETED') {
		filtered = todos.filter((todo) => todo.completed === true);
	} else if (filter === 'ACTIVE') {
		filtered = todos.filter((todo) => todo.completed !== true);
	}

	return (
		<>
			{/* Todo Add Input */}
			<Box my={3}>
				<AddItemInput />
			</Box>

			{/* Todos */}
			<Box
				sx={{
					'& > *': {
						borderBottom: `2px solid ${theme.palette.primary.main}`,
					},
					borderTopLeftRadius: '10px',
					borderTopRightRadius: '10px',
					overflow: 'hidden',
				}}
			>
				{filtered.map((todo) => (
					<Item key={todo.id} todo={todo} />
				))}
			</Box>

			{/* Todo Footer */}
			<TodoFooter />
		</>
	);
};

export default TodoList;
