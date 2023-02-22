import Item from './TodoItem';
import AddItemInput from './TodoAddInput';
import TodoFooter from './TodoPanel';
import Box from '@mui/material/Box';

import { useTheme } from '@mui/material';

import { useTypedSelector } from '../../hooks/reduxTypedHooks';

//
import { AnimatePresence } from 'framer-motion';

//
import { useMemo } from 'react';

const TodoList = () => {
	const theme = useTheme();
	const todos = useTypedSelector((state) => state.todos.todos);
	const filter = useTypedSelector((state) => state.todos.filter);

	let filteredAll = todos;

	let filteredCompleted = useMemo(() => todos.filter((todo) => todo.completed === true), [todos]);

	let filteredActive = useMemo(() => todos.filter((todo) => todo.completed !== true), [todos]);

	let content = filter === 'ALL' ? filteredAll : filter === 'COMPLETED' ? filteredCompleted : filteredActive;
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
					// overflow: 'hidden',
				}}
			>
				<AnimatePresence>
					{content.map((todo, idx) => (
						<Item key={todo.id} idx={idx} todo={todo} />
					))}
				</AnimatePresence>
			</Box>

			{/* Todo Footer */}
			<TodoFooter />
		</>
	);
};

export default TodoList;
